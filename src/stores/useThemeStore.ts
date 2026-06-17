import { defineStore } from 'pinia';

export const useThemeStore = defineStore('alerts', {
	state: () => ({
		theme : ''
	}),
	getters : {
		getTheme : (state) => {
			return state.theme;
		}
	},
	actions : {
		setTheme(theme: string){
			this.theme = theme;
		}
	}
});