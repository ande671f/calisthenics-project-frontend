import ForumCommentFormular from "@/components/forumPostContent/forumCommentFormular/ForumCommentFormular.vue";
import ForumCommentList from "@/components/forumPostContent/forumCommentList/ForumCommentList.vue";
import ForumPostDetails from "@/components/forumPostContent/forumPostDetails/ForumPostDetails.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import ForumService from "@/services/ForumService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "ForumComments",
	props: {
		forumPostId: String,
	},
	components: {
		NavigationBlack,
		PageHeader,
		ForumCommentList,
		ForumCommentFormular,
		ForumPostDetails,
	},

	setup(props) {
		const pageHeaderTitle = "Kommentarer";
		const forumPost = ref<IForumPost>();
		const forumPostId = ref<string>(props.forumPostId!);
		const forumComments = ref<IForumComment[]>();

		const getForumPost = async () => {
			ForumService.getForumPost(forumPostId.value).then((response) => {
				forumPost.value = response;
				console.log("Forumpost value", forumPost.value);
			});
		};

		const getForumComments = async () => {
			ForumService.getForumCommentsByPostId(forumPostId.value).then((response) => {
				forumComments.value = response;
				console.log("Forumcomments ", forumComments.value);
			});
		};

		onMounted(() => {
			getForumPost();
			getForumComments();
		});

		return {
			pageHeaderTitle,
			forumPost,
			forumComments,
			forumPostId,
		};
	},
});
