import ForumCategoryList from "@/components/forumCategoryList/ForumCategoryList.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Forum",
	components: {
		NavigationBlack,
		ForumCategoryList,
		PageHeader,
	},
	setup() {
		const title = "Forum";
		return {
			title,
		};
	},
});
