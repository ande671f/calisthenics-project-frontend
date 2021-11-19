import { defineComponent, ref } from "vue";
import NavigationWhite from "../navigation/navigationWhite/NavigationWhite.vue";

export default defineComponent({
	name: "Hero",
	props: {
		title: String,
		manchet: String,
	},
	components: {
		NavigationWhite,
	},
	setup(props) {
		const title = ref<string>(props.title!);
		const manchet = ref<string>(props.manchet!);

		return {
			title,
			manchet,
		};
	},
});
