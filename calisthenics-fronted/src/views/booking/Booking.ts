import CreateWorkout from "@/components/createWorkout/CreateWorkout.vue";
import CreateWorkoutLocation from "@/components/createWorkoutLocation/CreateWorkoutLocation.vue";
import CreateWorkoutType from "@/components/createWorkoutType/CreateWorkoutType.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import WorkoutList from "@/components/workoutList/WorkoutList.vue";
import BookingService from "@/services/BookingService";
import WorkoutService from "@/services/WorkoutService";
import { key } from "@/store";
import { computed, defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "Booking",
	components: {
		NavigationBlack,
		PageHeader,
		WorkoutList,
		CreateWorkoutType,
		CreateWorkoutLocation,
		CreateWorkout,
	},
	setup() {
		const store = useStore(key);

		const title = "Booking";

		const forumMember = computed(() => {
			return store.state.forumMember;
		});

		const workouts = ref<IWorkout[]>([]);

		const getWorkouts = async () => {
			BookingService.getWorkouts().then((response) => {
				workouts.value = response;
			});
		};

		const workoutLocations = ref<IWorkoutLocation[]>();
		const getWorkoutLocations = async () => {
			WorkoutService.getWorkoutLocations().then((response) => {
				workoutLocations.value = response;
			});
		};

		const workoutTypes = ref<IWorkoutType[]>();
		const getWorkoutTypes = async () => {
			WorkoutService.getWorkoutTypes().then((response) => {
				workoutTypes.value = response;
			});
		};

		onMounted(() => {
			getWorkouts();
			getWorkoutLocations();
			getWorkoutTypes();
		});

		return {
			title,
			forumMember,
			workouts,
			workoutLocations,
			workoutTypes,
		};
	},
});
