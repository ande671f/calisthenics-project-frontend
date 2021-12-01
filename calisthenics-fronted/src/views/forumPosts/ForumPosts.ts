import ForumPostList from "@/components/forumPostList/ForumPostList.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "ForumPosts",
	components: {
		NavigationBlack,
		ForumPostList,
		PageHeader,
	},

	setup() {
		const pageHeaderTitle = "Posts";
		return {
			pageHeaderTitle,
		};
	},
});
