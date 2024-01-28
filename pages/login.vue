<template>
	<v-container class="fill-height">
		<v-col class="pa-0">
			<v-row class="text-h4 font-weight-bold" justify="center">Welcome Back</v-row>
			<v-row class="text-body-2" justify="center">Enter your credentials to access your account</v-row>
			<v-row class="my-2 mt-4 mx-2">
				<v-col>
					<card-button @click="" width="100%" :svg="google" />
				</v-col>
				<div class="mx-2" />
				<v-col>
					<card-button @click="" width="100%" :svg="apple" />
				</v-col>
			</v-row>
			<v-row>
				<Divider text="or" />
			</v-row>
			<v-row> <v-text-field v-model="form.email" type="email" label="Email" bg-color="white" /> </v-row>
			<v-row>
				<v-text-field
					v-model="form.password"
					label="Password"
					bg-color="white"
					:type="passwordVisibility ? 'text' : 'password'"
					:append-inner-icon="passwordVisibility ? 'fas fa-eye' : 'fas fa-eye-slash'"
					@click:append-inner="() => (passwordVisibility = !passwordVisibility)"
					@keyup.enter="login()" />
			</v-row>
			<v-row justify="end" class="mb-4">
				<div @click="" class="text-primary mx-1">Forgot your password?</div>
			</v-row>
			<v-btn block height="50" variant="flat" color="primary" @click="$router.push('/')">Login</v-btn>
			<v-row class="my-4">
				<v-col>
					<v-row align="center" justify="center">
						Don't have an account?
						<div @click="$router.push('/signin')" class="text-primary mx-1">Create account</div>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
	</v-container>
</template>

<script lang="ts" setup>
	import google from "@/assets/svg/google.svg";
	import apple from "@/assets/svg/apple.svg";

	const form = reactive({
		name: "",
		email: "",
		password: "",
	});

	const passwordVisibility = ref(false);

	function login() {
		console.log(form);
	}
</script>

