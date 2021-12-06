import { defineComponent, ref } from "vue";
import Instructor from "./instructor/Instructor.vue";

export default defineComponent({
	name: "InstructorList",
	components: { Instructor },
	props: {
		instructors: Object as () => IInstructor[],
	},
	setup(prop) {
		const instructors = ref<IInstructor[]>(prop.instructors!);

		return {
			instructors,
		};
	},
});
