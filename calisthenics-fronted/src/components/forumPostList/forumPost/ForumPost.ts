import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ForumPost",
	props: {
		post: Object as () => IForumPost,
	},

	setup(props) {
		const post = ref(props.post!);
		post.value.description = post.value.description.slice(0, 90) + "...";
		return {};
	},
});
