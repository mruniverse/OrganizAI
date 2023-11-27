<template>
	<v-card :class="customClass" :variant="customVariant" color="grey-lighten-3">
		<v-col cols="auto" class="py-0">
			<v-row align="center" justify="center" style="height: 50px">
				<img height="30" :src="svg" />
				<div class="mx-1"></div>
				<div v-if="text" class="text-subtitle-1">
					{{ text }}
				</div>
			</v-row>
		</v-col>
	</v-card>
</template>

<script lang="ts" setup>
	const props = defineProps<{
		svg: string;
		text?: string;
		outlined?: boolean;
	}>();

	const customVariant = computed<any>(() => {
		return props.outlined ? "outline" : "flat";
	});

	const customClass = computed(() => {
		return props.outlined ? "custom-border" : "";
	});
</script>
