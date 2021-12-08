import WorkoutService from "@/services/WorkoutService";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "CreateWorkoutType",
	setup() {
		const title = ref<string>("");
		const description = ref<string>("");

		const createWorkoutType = async () => {
			WorkoutService.createWorkoutType(title.value, description.value).then((response) => {
				console.log("Workout type created");
				isCreateWorkoutTypeActive.value = false;
			});
		};

		const isCreateWorkoutTypeActive = ref<boolean>(false);
		const displayCreateWorkoutType = () => {
			isCreateWorkoutTypeActive.value = !isCreateWorkoutTypeActive.value;
		};

		return {
			title,
			description,
			createWorkoutType,
			isCreateWorkoutTypeActive,
			displayCreateWorkoutType,
		};
	},
});
