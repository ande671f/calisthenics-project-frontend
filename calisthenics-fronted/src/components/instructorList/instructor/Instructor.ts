import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Instructor",
	props: {
		instructor: Object as () => IInstructor,
	},
	setup(prop) {
		const instructor = ref(prop.instructor!);
		return {
			instructor,
		};
	},
});
