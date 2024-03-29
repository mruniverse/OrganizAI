// plugins/vuetify.js
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
import {aliases, fa} from "vuetify/iconsets/fa";

const customTheme = {
	customProperties: true,
	dark: false,
	colors: {
		primary: "#2e70f5",
		secondary: "#7d47cf",
		accent: "#82B1FF",
		error: "#FF5252",
		success: "#4CAF50",
		warning: "#FFC107",
		info: "#2196F3",
		background: "#ffffff",
		"light-grey": "#EEEEEE",
	},
};

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		icons: {
			defaultSet: "fa",
			aliases,
			sets: {
				fa,
			},
		},
		theme: {
			defaultTheme: "customTheme",
			themes: {
				customTheme,
			},
		},
		defaults: {
			VRow: {
				noGutters: true,
			},
			VTextField: {
				variant: "outlined",
				baseColor: "grey-lighten-1",
				bgColor: "grey-lighten-4",
				color: "primary",
				density: "comfortable",
			},
			VTextarea: {
				variant: "outlined",
				baseColor: "grey-lighten-1",
				bgColor: "grey-lighten-4",
				color: "primary",
				density: "comfortable",
			},
			VAutocomplete: {
				variant: "outlined",
				baseColor: "grey-lighten-1",
				bgColor: "grey-lighten-4",
				color: "primary",
				density: "comfortable",
			},
			VSelect: {
				variant: "outlined",
				baseColor: "grey-lighten-1",
				bgColor: "grey-lighten-4",
				color: "primary",
				density: "comfortable",
			},
			VFileInput: {
				variant: "outlined",
				baseColor: "grey-lighten-1",
				bgColor: "grey-lighten-4",
				color: "primary",
				density: "comfortable",
				prependIcon: "",
				prependInnerIcon: "fas fa-paperclip",
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);
});
