import ForumCategoryList from "@/components/forumCategoryList/ForumCategoryList.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import ForumService from "@/services/ForumService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "Forum",
	components: {
		NavigationBlack,
		ForumCategoryList,
		PageHeader,
	},
	setup() {
		const pageHeadertitle = "Forum";
		const titleLoading = "Loading...";
		const forumCategoryList = ref<IForumCategory[]>();

		const getForumCategoryList = async () => {
			ForumService.getCategories().then((response) => {
				forumCategoryList.value = response;
			});
		};
		onMounted(() => {
			getForumCategoryList();
		});

		return {
			pageHeadertitle,
			titleLoading,
			forumCategoryList,
		};
	},
});
