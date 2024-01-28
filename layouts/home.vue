<template>
	<v-main> <slot /> </v-main>
	<v-bottom-navigation v-model="page" mandatory mode="shift" height="44" color="primary" bg-color="grey-lighten-5">
		<v-btn value="index">
			<v-icon icon="fas fa-home" />
			<span class="mt-1">Home</span>
		</v-btn>
		<v-btn value="wallet">
			<v-icon icon="fas fa-wallet" />
			<span class="mt-1">Wallet</span>
		</v-btn>
		<v-btn value="new" :class="newClass">
			<img width="40" :src="plus" />
		</v-btn>
		<v-btn value="transactions">
			<v-icon icon="fas fa-money-bill" />
			<span class="mt-1">Transactions</span>
		</v-btn>
		<v-btn value="login">
			<v-icon icon="fas fa-user" />
			<span class="mt-1">Profile</span>
		</v-btn>
	</v-bottom-navigation>
</template>

<script setup lang="ts">
	import plus from "@/assets/svg/plus.svg";
	import {useRouter} from "vue-router";

	const router = useRouter();
	const page = computed<any>({
		get: () => router.currentRoute.value.name,
		set: (value) => router.push(value === "index" ? "/" : `${value}`),
	});

	const newClass = computed(() => {
		return page.value === "new" ? "svg primary" : "pb-4";
	});
</script>

<style scoped lang="scss">
	.v-bottom-navigation .v-bottom-navigation__content > .v-btn {
		width: 50px !important;
		margin: 0 -10px !important;
		font-size: smaller;
	}

	.v-bottom-navigation .v-bottom-navigation__content > .v-btn:deep(span.v-btn__overlay) {
		opacity: 0 !important;
	}
</style>
