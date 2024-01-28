<template>
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
						<span>Novo Registro</span>
					</v-row>
				</v-col>
				<v-col></v-col>
			</v-row>
		</v-card-title>
		<v-card-text class="py-4">
			<v-row>
				<v-select label="Recorrência" v-model="form.recurrence" :items="recurrenceItems" />
			</v-row>
			<v-row v-if="form.recurrence === 2">
				<v-select label="Dia" v-model="form.day" :items="days" />
			</v-row>
			<v-row>
				<v-select label="Tipo" v-model="form.type" :items="typeItems" />
			</v-row>
			<v-row v-if="form.type === 2">
				<v-select label="Método" v-model="form.method" :items="methodItems" />
			</v-row>
			<v-row>
				<v-text-field label="Nome" v-model="form.name" />
			</v-row>
			<v-row>
				<v-text-field label="Valor" type="tel" v-model="form.value" v-money="moneyConfig" />
			</v-row>
		</v-card-text>
		<v-card-actions>
			<v-btn block height="50" variant="flat" color="primary">Salvar</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup lang="ts">
	definePageMeta({
		layout: "home",
	});

	const form = reactive({
		recurrence: 1,
		day: null,
		type: null,
		method: null,
		name: "",
		value: "",
	});

	const moneyConfig = {
		decimal: ",",
		thousands: ".",
		prefix: "R$ ",
		precision: 2,
	};
	const typeItems = [
		{
			title: "Entrada",
			value: 1,
		},
		{
			title: "Saída",
			value: 2,
		},
	];
	const recurrenceItems = [
		{
			title: "Única",
			value: 1,
		},
		{
			title: "Recorrente",
			value: 2,
		},
	];
	const methodItems = [
		{
			title: "Dinheiro",
			value: 1,
		},
		{
			title: "Cartão de Crédito",
			value: 2,
		},
		{
			title: "Cartão de Débito",
			value: 3,
		},
		{
			title: "Transferência",
			value: 4,
		},
		{
			title: "Boleto",
			value: 5,
		},
		{
			title: "Cheque",
			value: 6,
		},
	];
	const days = computed(() => {
		const days = [];
		for (let i = 1; i <= 31; i++) {
			days.push({
				title: i,
				value: i,
			});
		}
		return days;
	});
</script>
