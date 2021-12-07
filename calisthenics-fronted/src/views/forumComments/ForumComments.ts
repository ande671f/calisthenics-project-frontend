import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "ForumComments",
	components: {
		NavigationBlack,
		PageHeader,
	},

	setup() {
		const pageHeaderTitle = "Kommentarer";
		return {
			pageHeaderTitle,
		};
	},
});
