<template>
	<div class="pr-2">
		<ThemeChanger></ThemeChanger>
	</div>
	<RouterView />
</template>
<script setup lang="ts">
	import ThemeChanger from './components/general/ThemeChanger.vue';
</script>
