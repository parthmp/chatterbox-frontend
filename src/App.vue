<template>
	<div class="pr-2">
		<ThemeChanger></ThemeChanger>
	</div>
	<Toast position="top-center" />
	<RouterView />
</template>
<script setup lang="ts">
	import ThemeChanger from './components/general/ThemeChanger.vue';
	import { Toast } from 'primevue';
</script>
