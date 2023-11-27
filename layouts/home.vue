<template>
	<v-layout>
		<v-main> Main Content </v-main>
		<v-bottom-navigation grow color="primary" bg-color="light-grey">
			<v-btn value="home">
				<v-icon size="x-large">mdi-home-variant-outline</v-icon>
			</v-btn>
			<v-btn value="income">
				<v-icon size="x-large">mdi-cash-plus</v-icon>
			</v-btn>

			<v-btn value="new">
				<img :src="plus" height="42"/>
			</v-btn>

			<v-btn value="expenses">
				<v-icon size="x-large">mdi-cash-minus</v-icon>
			</v-btn>

			<v-btn value="nearby">
				<v-icon size="x-large">mdi-home-variant-outline</v-icon>
			</v-btn>
		</v-bottom-navigation>
	</v-layout>
</template>

<script setup lang="ts">
	import plus from "@/assets/svg/plus.svg";
</script>
