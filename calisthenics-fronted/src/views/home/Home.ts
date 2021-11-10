import About from "@/components/about/About.vue";
import Hero from "@/components/hero/Hero.vue";
import ReviewList from "@/components/reviewlist/ReviewList.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Home",
	components: {
		Hero,
		About,
		ReviewList,
	},
	setup() {
		const review1: IReview = { name: "Anders", message: "Jeg kan godt lide pecs" };
		const review2: IReview = { name: "Anders", message: "Jeg kan godt lide pecs" };
		const review3: IReview = { name: "Anders", message: "Jeg kan godt lide pecs" };
		const review4: IReview = { name: "Anders", message: "Jeg kan godt lide pecs" };

		const reviews: IReview[] = [review1, review2, review3, review4];

		console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRR", reviews);
		return {
			reviews,
		};
	},
});
