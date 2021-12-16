import { defineComponent, ref } from "vue";
import ForumComment from "./forumComment/ForumComment.vue";

export default defineComponent({
	name: "ForumCommentList",
	props: {
		forumCommentList: Object as () => IForumComment[],
	},

	components: {
		ForumComment,
	},

	setup(props) {
		const forumCommentList = ref<IForumComment[]>(props.forumCommentList!);

		return {
			forumCommentList,
		};
	},
});
