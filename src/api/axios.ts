// src/api/axios.ts
import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '../stores/useAuthStore';
import env from '../env';
import router from '../routes/routes';

interface RetriableRequestConfig extends InternalAxiosRequestConfig {
	_retried?: boolean;
}

type QueueCallback = (token: string | null) => void;

const api = axios.create({
	baseURL: env.API_URL,
	withCredentials: true
});

let isRefreshing = false;
let pendingQueue: QueueCallback[] = [];

const processQueue = (token: string | null): void => {
	pendingQueue.forEach(callback => {
		try {
			callback(token);
		} catch (error) {
			console.error('Queue callback error:', error);
		}
	});
 	pendingQueue = [];
};

api.interceptors.request.use((config) => {
	const authStore = useAuthStore();

	if (authStore.accessToken) {
		config.headers.Authorization = `Bearer ${authStore.accessToken}`;
	}

	return config;
});

api.interceptors.response.use((response) => response, async (error: AxiosError) => {

		const originalRequest = error.config as RetriableRequestConfig;
		const authStore = useAuthStore();

		// Don't retry if it's not a 401, no request, or already retried
		if (error.response?.status !== 401 || !originalRequest || originalRequest._retried) {
			return Promise.reject(error);
		}

		// Don't try to refresh the refresh endpoint
		if (originalRequest.url?.includes('/refresh')) {
			authStore.setAccessToken(null);
			await router.push('/');
			return Promise.reject(error);
		}

		// If already refreshing, queue this request
		if(isRefreshing){
			return new Promise((resolve, reject) => {

				// Add timeout to prevent hanging
				const timeout = setTimeout(() => {
					reject(new Error('Refresh queue timeout'));
				}, 10000);
				
				pendingQueue.push((token) => {
					
					clearTimeout(timeout);

					if(!token){
						reject(error);
						return;
					}

					originalRequest.headers = originalRequest.headers || {};
					originalRequest.headers.Authorization = `Bearer ${token}`;
					resolve(api(originalRequest));

				});

			});
		}

		// Start refresh flow
		originalRequest._retried = true;
		isRefreshing = true;

		try {
			const newToken = await authStore.refreshAccessToken();
			
			if (!newToken) {
				throw new Error('Refresh did not return a token');
			}
			
			authStore.setAccessToken(newToken);
			processQueue(newToken);
			
			originalRequest.headers = originalRequest.headers || {};
			originalRequest.headers.Authorization = `Bearer ${newToken}`;
			return api(originalRequest);
			
		}catch (refreshError){

			processQueue(null);
			// Only logout for auth failures, not network errors
			if(axios.isAxiosError(refreshError) && refreshError.code === 'ERR_NETWORK'){
				console.error('Network error during refresh');
			}else{
				await authStore.logout();
			}

			return Promise.reject(refreshError);
			
		} finally {
			isRefreshing = false;
		}
	}
);

export default api;