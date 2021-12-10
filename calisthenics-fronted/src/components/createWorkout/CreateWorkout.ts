import WorkoutService from "@/services/WorkoutService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "CreateWorkoutLocation",
	props: {
		workouts: Object as () => IWorkout[],
		workoutTypes: Object as () => IWorkoutType[],
		workoutLocations: Object as () => IWorkoutLocation[],
	},
	setup(props) {
		const workouts = ref<IWorkout[]>(props.workouts!);
		const workoutTypes = ref<IWorkoutType[]>(props.workoutTypes!);
		const workoutLocations = ref<IWorkoutLocation[]>(props.workoutLocations!);

		const date = ref<Date>();
		const workoutType = ref<IWorkoutType>();
		const workoutLocation = ref<IWorkoutLocation>();

		const isCreateWorkoutActive = ref<boolean>(false);
		const displayCreateWorkout = () => {
			isCreateWorkoutActive.value = !isCreateWorkoutActive.value;
		};

		const createWorkout = async () => {
			WorkoutService.createWorkout(date.value!, workoutType.value!, workoutLocation.value!).then((response) => {
				WorkoutService.getWorkout(response.workoutId).then((response) => {
					workouts.value.push(response);
				});
				isCreateWorkoutActive.value = false;
			});
		};

		onMounted(() => {});

		return {
			workoutTypes,
			workoutLocations,
			workoutType,
			workoutLocation,
			date,
			isCreateWorkoutActive,
			createWorkout,
			displayCreateWorkout,
		};
	},
});
