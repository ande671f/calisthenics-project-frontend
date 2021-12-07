import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "ForumCategory",
	props: {
		category: Object as () => IForumCategory,
	},

	setup(prop) {
		const category = ref(prop.category!);

		return {
			category,
		};
	},
});
