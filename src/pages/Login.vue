<template>
	<div>
		<Card class="w-full max-w-[500px] m-auto mt-10 p-4">
			<template #content>
				<div>
					<img v-if="store.getTheme === 'dark'" src="./../assets/logo/chatterbox-logo-dark.svg" class="m-auto mb-4 mt-4 max-w-75" alt="">
					<img v-if="store.getTheme === 'light'" src="./../assets/logo/chatterbox-logo-light.svg" class="m-auto mb-4 mt-4 max-w-75" alt="">
					<Form v-slot="$form" :resolver="resolver" @submit="submitLogin">
						<div class="flex flex-col gap-5">
							<div class="input">
								<label for="email">Email</label>
								<InputText placeholder="Enter email" class="w-full" id="email" type="email" name="email"></InputText>
								<Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
							</div>
							<div class="input">
								<label for="password">Password</label>
								<Password placeholder="Enter password" id="password" name="password" toggleMask class="w-full" :inputStyle="{width:'100%'}" :feedback="false"></Password>
								<Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{ $form.password.error?.message }}</Message>
							</div>

							<VueTurnstile ref="turnstile" :site-key="env.TURNSTILE_SITE_KEY" v-model="data.token" size="flexible" />
							
							<Button type="submit" class="w-full text-lg!" :disabled="data.loading"><span v-if="data.loading" class="pi pi-spinner animate-spin"></span><span v-if="!data.loading" class="pi pi-lock "></span>Login</Button>
						</div>
					</Form>
					
				</div>
				
			</template>
			
		</Card>
	</div>
</template>

<script setup lang="ts">

import { InputText, Password, Button, useToast } from 'primevue';
import { Card } from 'primevue';
import VueTurnstile from 'vue-turnstile';
import env from '../env';
import { reactive } from 'vue';
import { useThemeStore } from '../stores/useThemeStore';
import { Form, type FormResolverOptions, type FormSubmitEvent } from '@primevue/forms';
import { Message } from 'primevue';

const store = useThemeStore();
const toast = useToast();

type LoginFormType = {
	token : string,
	loading: boolean,
	email: string,
	password : string
};

const data = reactive<LoginFormType>({
	token : '',
	loading : false,
	email : '',
	password : ''
});

const resolver = ({ values }: FormResolverOptions) => {

	const errors: Record<string, { message: string }[]> = {};

	if(!values.email){
		errors.email = [{ message: 'Email is required.' }];
	}else if(!/^\S+@\S+\.\S+$/.test(values.email)){
		errors.email = [{ message: 'Invalid email address.' }];
	}

	if(!values.password){
		errors.password = [{ message: 'Password is required.' }];
	}else if(values.password.length < 8){
		errors.password = [{ message: 'Minimum 8 characters required.' }];
	}

	return { values, errors };
};

const submitLogin = (event: FormSubmitEvent) : void => {
	
	if(!event.valid){
		return;
	}

	if(data.token.trim() === ''){
		toast.add({
			severity: 'error',
			summary: 'Captcha error',
			detail: 'Please check the captcha checkbox',
			life: 2000
		});
		return ;
	}

	
	console.log(data.token);
	console.log(event.values);
}

</script>