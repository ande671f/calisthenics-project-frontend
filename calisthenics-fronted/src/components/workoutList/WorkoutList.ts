import { defineComponent, ref } from "vue";
import Workout from "./workout/Workout.vue";

export default defineComponent({
	name: "WorkoutList",
	props: {
		workouts: Object as () => IWorkout[],
	},
	components: {
		Workout,
	},
	setup(props) {
		const workouts = ref<IWorkout[]>(props.workouts!);

		return {
			workouts,
		};
	},
});
