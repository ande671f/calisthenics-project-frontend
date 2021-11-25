import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Review",
	props: {
		review: Object as () => IReview,
	},
	setup(prop) {
		const review = ref(prop.review!);
		console.log("review", review);
		return {
			review,
		};
	},
});
