import { defineComponent } from "vue";

export default defineComponent({
	name: "ForumComment",
	props: {
		comment: Object as () => IForumComment,
	},

	setup() {
		return {};
	},
});
