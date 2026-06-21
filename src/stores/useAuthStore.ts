import { defineStore } from 'pinia';
import api from '../api/axios';

interface LoginPayload {
	email: string;
	password: string;
	token: string;
}

export const useAuthStore = defineStore('auth', {
	state: () => ({
		accessToken: null as string | null,
		initialized: false
	}),
	actions: {
		setAccessToken(token: string | null): void {
			this.accessToken = token;
		},

		async login(payload: LoginPayload): Promise<void> {
			const response = await api.post('/login', payload);
			this.setAccessToken(response.data.accessToken);
		},

		async refreshAccessToken(): Promise<string | null> {
			try {
				const response = await api.post('/refresh');
				this.setAccessToken(response.data.accessToken);
				return response.data.accessToken;
			} catch {
				this.setAccessToken(null);
				return null;
			}
		},

		async logout(): Promise<void> {
			try {
				await api.post('/logout');
			} finally {
				this.setAccessToken(null);
			}
		}
	}
});