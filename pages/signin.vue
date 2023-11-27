<template>
	<v-container class="fill-height">
		<v-col class="pa-0">
			<v-row class="text-h4 font-weight-bold">Get Started Now</v-row>
			<v-row class="text-body-2">Enter your credentials to access your account</v-row>
			<v-row class="my-2 mt-4">
				<card-button @click="" width="100%" :svg="google" text="Sign in with Google" />
				<v-row class="ma-1" />
				<card-button @click="" width="100%" :svg="apple" text="Sign in with Apple" />
			</v-row>
			<v-row>
				<Divider text="or" />
			</v-row>
			<v-row> <v-text-field v-model="form.name" label="Name" bg-color="white" /> </v-row>
			<v-row> <v-text-field v-model="form.email" type="email" label="Email" bg-color="white" /> </v-row>
			<v-row>
				<v-text-field
					v-model="form.password"
					label="Password"
					bg-color="white"
					:type="passwordVisibility ? 'text' : 'password'"
					:append-inner-icon="passwordVisibility ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
					@click:append-inner="() => (passwordVisibility = !passwordVisibility)"
					@keyup.enter="login()" />
			</v-row>
			<v-row>
				<v-checkbox>
					<template v-slot:label>
						<div>
							I agree to the
							<a href="https://vuetifyjs.com" @click.stop> Terms & Privacy </a>
						</div>
					</template>
				</v-checkbox>
			</v-row>
			<v-btn block height="50" variant="flat" color="primary">Submit</v-btn>
			<v-row class="my-4">
				<v-col>
					<v-row align="center" justify="center">
						Already have an account?
						<div @click="$router.push('/login')" class="text-primary mx-1">Log in</div>
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

