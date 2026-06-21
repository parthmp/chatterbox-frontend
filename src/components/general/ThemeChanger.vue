<template>
	<div class="float-end p-2 z-30">
		<p class="pi pi-moon text-2xl! cursor-pointer" v-if="store.theme === 'dark'" @click="changeTheme"></p>
		<p class="pi pi-sun text-2xl! cursor-pointer" v-if="store.theme === 'light'" @click="changeTheme"></p>
	</div>
	<div class="clear-both"></div>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useThemeStore } from '../../stores/useThemeStore';

const store = useThemeStore();

const applyThemeClass = (theme: string): void => {
	if (theme === 'dark') {
		document.documentElement.classList.add('p-dark');
	} else {
		document.documentElement.classList.remove('p-dark');
	}
};

const changeTheme = (): void => {
	const nextTheme = store.theme === 'light' ? 'dark' : 'light';
	store.setTheme(nextTheme);
};

watch(() => store.theme, (theme) => {
	applyThemeClass(theme);
});

onMounted(() => {
	applyThemeClass(store.theme);
});
</script>