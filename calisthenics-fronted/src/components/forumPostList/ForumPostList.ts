import { defineComponent, ref } from "vue";
import ForumPost from "./forumPost/ForumPost.vue";

export default defineComponent({
	name: "ForumList",

	props: {
		forumPostList: Object as () => IForumPost[],
	},

	components: {
		ForumPost,
	},

	setup(props) {
		const forumPostList = ref<IForumPost[]>(props.forumPostList!);

		return {
			forumPostList,
		};
	},
});
