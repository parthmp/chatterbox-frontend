<template>
	<div>
		<Card class="w-full max-w-[550px] m-auto mt-10">
			<template #title>Login</template>
			<template #content>
				
				<label for="email">Email</label>
				<InputText placeholder="Enter email" class="w-full" id="email"></InputText>
				<br>
				<br>
				<label for="password">Password</label>
				<Password placeholder="Enter password" id="password" toggleMask class="w-full" :inputStyle="{width:'100%'}"></Password>
				
				<br>
				<br>
				<Button class="w-full text-lg!">Login</Button>
			</template>
			
		</Card>
	</div>
</template>

<script setup lang="ts">

import { InputText, Password, Button } from 'primevue';
import { Card } from 'primevue';


</script>