<template>
	
	<div class="float-end p-2 z-30">
		<p class="pi pi-moon text-2xl! cursor-pointer" v-if="data.mode === 'dark'" @click="changeTheme"></p>
		<p class="pi pi-sun text-2xl! cursor-pointer" v-if="data.mode === 'light'" @click="changeTheme"></p>
	</div>
	<div class="clear-both"></div>

</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { useThemeStore } from '../../stores/useThemeStore';

const store = useThemeStore();


const data = reactive<{mode : string}>({
	mode : 'light'
});

const changeTheme = () : void => {
	if(data.mode === 'light'){
		data.mode = 'dark';
	}else{
		data.mode = 'light';
	}
	document.documentElement.classList.toggle('p-dark');
	localStorage.setItem('theme', data.mode);
	store.setTheme(data.mode);
}

const initTheme = () => {
    if(localStorage.getItem('theme') === 'dark'){
		data.mode = 'dark';
        document.documentElement.classList.add('p-dark');
    }else{
		data.mode = 'light';
        document.documentElement.classList.remove('p-dark');
    }
	store.setTheme(data.mode);
};

onMounted(() => {
	initTheme();
});

</script>