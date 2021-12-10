import ForumService from "@/services/ForumService";
import { store } from "@/store";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ForumCommentFormular",
	props: {
		forumPostId: String,
	},

	setup(props) {
		const description = ref<string>("");
		const forumComment = ref<IForumComment>();
		const forumPostId = ref<string>(props.forumPostId!);
		const createForumComment = async () => {
			ForumService.createForumComment(
				store.state.forumMember?.forumMemberId!,
				description.value!,
				forumPostId.value
			).then((response) => {
				forumComment.value = response;
			});
		};

		return {
			forumComment,
			createForumComment,
			description,
		};
	},
});
