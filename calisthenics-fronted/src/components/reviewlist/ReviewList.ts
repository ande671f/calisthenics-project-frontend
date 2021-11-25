import { defineComponent, ref } from "vue";
import Review from "./review/Review.vue";

export default defineComponent({
	name: "ReviewList",
	components: { Review },
	props: {
		reviews: Object as () => IReview[],
	},
	setup(prop) {
		const reviews = ref(prop.reviews!);
		console.log("reviews", reviews);
		return {
			reviews,
		};
	},
});
