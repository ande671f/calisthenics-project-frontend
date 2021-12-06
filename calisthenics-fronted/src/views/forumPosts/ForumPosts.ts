import ForumPostList from "@/components/forumPostList/ForumPostList.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ForumPosts",
	props: {
		forumCategoryId: String,
	},
	components: {
		NavigationBlack,
		ForumPostList,
		PageHeader,
	},

	setup(props) {
		const pageHeaderTitle = "Posts";
		const forumCategoryId = ref<string>(props.forumCategoryId!);
		console.log("forumCategoryId", forumCategoryId.value);

		return {
			pageHeaderTitle,
			forumCategoryId,
		};
	},
});
