<template>
	<NewWalletDialog v-model="newWalletDialog" />
	<v-card flat class="fill-height d-flex flex-column" scrollable>
		<v-card-title>
			<v-row align="center">
				<v-col>
					<v-btn
						@click="$router.back()"
						variant="flat"
						size="small"
						color="light-grey"
						class="mr-auto"
						icon="fas fa-chevron-left" />
				</v-col>
				<v-col cols="6">
					<v-row justify="center">
						<span>Minha Carteira</span>
					</v-row>
				</v-col>
				<v-col></v-col>
			</v-row>
		</v-card-title>
		<v-card-text class="py-4"> </v-card-text>
		<v-card-actions>
			<v-btn block height="50" variant="flat" color="primary" @click="newWalletDialog = true">Novo</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "home",
	});

	const newWalletDialog = ref(false);
</script>
