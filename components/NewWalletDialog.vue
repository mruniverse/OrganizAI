<template>
	<v-dialog v-model="value">
		<v-card class="fill-height d-flex flex-column" style="border-radius: 18px" scrollable>
			<v-card-title class="px-2">
				<v-row align="center">
					<v-col></v-col>
					<v-col cols="6">
						<v-row justify="center">
							<span>Minha Carteira</span>
						</v-row>
					</v-col>
					<v-col>
						<v-row justify="end">
							<v-btn
								@click="$router.back()"
								variant="flat"
								size="small"
								color="light-grey"
								icon="fas fa-close" />
						</v-row>
					</v-col>
				</v-row>
			</v-card-title>
			<v-card-text class="py-4">
				<v-row>
					<v-text-field label="Nome" v-model="wallet.name" />
				</v-row>	
			</v-card-text>
			<v-card-actions>
				<v-btn block height="50" variant="flat" color="primary">Novo</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup lang="ts">
	import type {Wallet} from "@/models/Wallet";

	const emit = defineEmits(["update:modelValue"]);
	const props = defineProps<{
		modelValue: boolean;
	}>();

	const value = computed({
		get: () => props.modelValue,
		set: (value) => emit("update:modelValue", value),
	});

	const wallet = reactive<Wallet>({
		name: "",
		color: "",
		balance: 0,
		invoice: "",
	});
</script>
