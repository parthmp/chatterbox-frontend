<template>
	<div>
		<Card class="w-full max-w-[550px] m-auto mt-10">
			<template #content>
				<div>
					<img src="./../assets/logo/chatterbox-logo-light.svg" class="m-auto mb-4 mt-4" alt="">
					<label for="email">Email</label>
					<InputText placeholder="Enter email" class="w-full" id="email"></InputText>
					<br>
					<br>
					<label for="password">Password</label>
					<Password placeholder="Enter password" id="password" toggleMask class="w-full" :inputStyle="{width:'100%'}"></Password>
					
					<br>
					<br>
					<Button class="w-full text-lg!">Login</Button>
				</div>
				
			</template>
			
		</Card>
	</div>
</template>

<script setup lang="ts">

import { InputText, Password, Button } from 'primevue';
import { Card } from 'primevue';


</script>