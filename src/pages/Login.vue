<template>
	<div>
		<Card class="w-full max-w-[500px] m-auto mt-10 p-4">
			<template #content>
				<div>
					<img src="./../assets/logo/chatterbox-logo-light.svg" class="m-auto mb-4 mt-4" alt="">
					<div class="flex flex-col gap-5">
						<div class="input">
							<label for="email">Email</label>
							<InputText placeholder="Enter email" class="w-full" id="email"></InputText>
						</div>
						<div class="input">
							<label for="password">Password</label>
							<Password placeholder="Enter password" id="password" toggleMask class="w-full" :inputStyle="{width:'100%'}"></Password>
						</div>
						<VueTurnstile ref="turnstile" :site-key="env.TURNSTILE_SITE_KEY" v-model="data.token" size="flexible" />
						
						<Button class="w-full text-lg!"><span class="pi pi-spinner animate-spin"></span>Login</Button>
					</div>
					
				</div>
				
			</template>
			
		</Card>
	</div>
</template>

<script setup lang="ts">

import { InputText, Password, Button, Popover } from 'primevue';
import { Card } from 'primevue';
import VueTurnstile from 'vue-turnstile';
import env from '../env';
import { reactive } from 'vue';

const data = reactive({
	token : ''
});


</script>