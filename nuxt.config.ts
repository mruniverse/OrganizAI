import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";
import {createResolver} from "@nuxt/kit";

const {resolve} = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {enabled: false},
	pwa: {
		registerType: "autoUpdate",
		manifest: {
			name: "Nuxt Vite PWA",
			short_name: "OrganizAI",
			theme_color: "#ffffff",
			icons: [
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "icon.jpg",
					sizes: "512x512",
					type: "image/jpg",
				},
				{
					src: "icon.jpg",
					sizes: "512x512",
					type: "image/jpg",
					purpose: "any maskable",
				},
			],
		},
		workbox: {
			globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
		},
		client: {
			installPrompt: true,
			// you don't need to include this: only for testing purposes
			// if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
			periodicSyncForUpdates: 20,
		},
		devOptions: {
			enabled: true,
			suppressWarnings: true,
			navigateFallbackAllowlist: [/^\/$/],
			type: "module",
		},
	},
	runtimeConfig: {
		public: {
			apiBase: process.env.NUXT_PUBLIC_API_BASE,
		},
	},
	css: ["~/assets/scss/main.scss", "vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
	hooks: {
		"vite:extendConfig": (config) => {
			if (config.plugins) {
				config.plugins.push(
					vuetify({
						autoImport: true,
						styles: {configFile: resolve("./assets/scss/settings.scss")},
					})
				);
			}
		},
	},
	modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@vite-pwa/nuxt"],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
	},
	plugins: ["~/plugins/chartjs.client.ts", "~/plugins/vue-toastification.ts", "~/plugins/vue-datepicker.ts"],
	build: {
		transpile: ["vuetify", "vue-toastification"],
	},
	pinia: {
		storesDirs: ["./stores/**"],
	},
	app: {
		keepalive: true,
	},
	sourcemap: {
		server: false,
		client: false,
	},
});
