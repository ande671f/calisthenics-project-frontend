import WorkoutService from "@/services/WorkoutService";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "CreateWorkoutLocation",
	setup() {
		const city = ref<string>("");
		const address = ref<string>("");
		const zip = ref<string>("");
		const description = ref<string>("");

		const createWorkoutLocation = async () => {
			WorkoutService.createWorkoutLocation(city.value, address.value, zip.value, description.value).then(
				(response) => {
					console.log("Workout location created");
					isCreateWorkoutLocationActive.value = false;
				}
			);
		};

		const isCreateWorkoutLocationActive = ref<boolean>(false);
		const displayCreateWorkoutLocation = () => {
			isCreateWorkoutLocationActive.value = !isCreateWorkoutLocationActive.value;
		};

		return {
			city,
			address,
			zip,
			description,
			createWorkoutLocation,
			isCreateWorkoutLocationActive,
			displayCreateWorkoutLocation,
		};
	},
});
