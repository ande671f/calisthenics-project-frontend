import Hero from "@/components/hero/Hero.vue";
import About from "@/components/about/About.vue";	
import { defineComponent } from "vue";

export default defineComponent({
	name: "Home",
	components: {
		Hero,
		About,
	},
	setup() {
		return {};
	},
});
