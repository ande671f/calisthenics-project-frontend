import { defineComponent } from "vue";

export default defineComponent({
	name: "pageHeader",

	props: {
		title: String,
	},

	setup(prop) {
		const title = prop.title!;
		return {
			title,
		};
	},
});
