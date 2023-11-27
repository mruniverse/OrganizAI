<template>
	<v-row no-gutters align="center" class="py-2">
		<v-col cols="auto" class="text-subtitle-2 text-grey-darken-1 pr-2" v-if="prependText">
			{{ prependText }}
		</v-col>
		<v-col>
			<v-row align="center">
				<v-col>
					<v-sheet :color="color || 'light-grey'" width="100%" rounded="xl" :height="dividerHeight" />
				</v-col>
				<v-col v-if="text" cols="auto" class="mx-2">
					{{ text }}
				</v-col>
				<v-col>
					<v-sheet :color="color || 'light-grey'" width="100%" rounded="xl" :height="dividerHeight" />
				</v-col>
			</v-row>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
	const props = defineProps<{
		prependText?: string;
		text?: string;
		color?: string;
	}>();

	const dividerHeight = 2;
</script>
