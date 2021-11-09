import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "Review",
    props:{
        Review:Object as () => IReview,

    },
    setup(prop){
        const review=ref(prop.Review);
        return{
            review,
        };
    }
})