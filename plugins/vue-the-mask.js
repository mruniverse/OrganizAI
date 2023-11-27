import money from "v-money";
import mask from "vue-the-mask";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(money, {precision: 2});
	nuxtApp.vueApp.use(mask);
});
