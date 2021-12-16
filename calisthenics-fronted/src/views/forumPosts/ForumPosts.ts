import ForumPostList from "@/components/forumPostList/ForumPostList.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import ForumService from "@/services/ForumService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "ForumPosts",
	props: {
		categoryId: String,
	},
	components: {
		NavigationBlack,
		ForumPostList,
		PageHeader,
	},

	setup(props) {
		const pageHeaderTitle = "Posts";
		const titleLoading = "Loading...";
		const forumCategoryId = ref<string>(props.categoryId!);
		console.log("forumCategoryId", forumCategoryId.value);
		const forumPostList = ref<IForumPost[]>();

		//metoder:
		const getForumPostList = async () => {
			ForumService.getForumPostsByCategoryId(forumCategoryId.value).then((response) => {
				forumPostList.value = response;
			});
		};

		onMounted(() => {
			getForumPostList();
		});

		return {
			pageHeaderTitle,
			titleLoading,
			forumCategoryId,
			forumPostList,
		};
	},
});
