import { defineComponent, ref } from "vue";
import Review from "./review/Review.vue";

export default defineComponent({
    name: "ReviewList",
	components: { Review },
    props: {
    },
    setup() {
        console.log("TEST");
		return {};
    }
});