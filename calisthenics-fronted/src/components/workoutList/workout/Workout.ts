import WorkoutService from "@/services/WorkoutService";
import { key } from "@/store";
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "Workout",
	props: {
		workout: Object as () => IWorkout,
	},
	setup(props) {
		const store = useStore(key);
		const workout = ref<IWorkout>(props.workout!);

		const isInfoBoxActive = ref<boolean>(false);
		const displayInfobox = () => {
			isInfoBoxActive.value = !isInfoBoxActive.value;
		};

		const joinWorkout = async () => {
			if (workout.value.communityMemberWorkouts == null) {
				workout.value.communityMembers = [];
			}

			// const test: ICommunityMemberWorkout = {
			// 	communityMemberId: store.state.forumMember?.communityMember?.communityMemberId!,
			// 	workoutId: workout.value.workoutId,
			// 	communityMember: null,
			// 	workout: null,
			// };

			workout.value.communityMembers?.push(store.state.forumMember?.communityMember!);
			WorkoutService.joinWorkout(workout.value).then((response) => {});

			isUserJoined.value = true;
		};

		const leaveWorkout = () => {
			isUserJoined.value = false;
		};

		const isUserJoined = ref<boolean>(false);

		const checkIfJoined = () => {
			const userWorkouts = store.state.forumMember?.communityMember?.workouts;

			if (userWorkouts != null) {
				userWorkouts.forEach((userWorkout) => {
					if (userWorkout.workoutId == workout.value.workoutId) {
						console.log("HELLO");
						isUserJoined.value = true;
					}
				});
			}
		};

		onMounted(() => {
			checkIfJoined();
		});

		return {
			workout,
			joinWorkout,
			isInfoBoxActive,
			displayInfobox,
			isUserJoined,
			leaveWorkout,
			checkIfJoined,
		};
	},
});
