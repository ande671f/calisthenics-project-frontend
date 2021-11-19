import { defineComponent, ref } from "vue";
import NavigationWhite from "../navigation/navigationWhite/NavigationWhite.vue";

export default defineComponent({
	name: "Hero",
	props: {
		propTitle: String,
		propManchet: String,
	},
	components: {
		NavigationWhite,
	},
	setup(props) {
		const title=ref<string>(props.propTitle!)
		const manchet=ref<string>(props.propManchet!)

		console.log("prop title:", title.value);
		console.log("prop manchet", manchet.value)
		
		return {
			title,
			manchet,
		};
	},
});
