import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ForumPostDetails",
	props: {
		forumPostDetails: Object as () => IForumPost,
	},

	setup(props) {
		const forumPostDetails = ref<IForumPost>(props.forumPostDetails!);
		return {
			forumPostDetails,
		};
	},
});
