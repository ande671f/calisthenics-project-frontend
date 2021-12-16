import ProgressService from "@/services/ProgressService";
import { defineComponent, ref } from "vue";
import PersonalProgressChart from "./personalProgressChart/PersonalProgressChart.vue";

export default defineComponent({
	name: "PersonalProgressWeight",
	props: {
		forumMember: Object as () => IForumMember,
	},
	components: {
		PersonalProgressChart,
	},
	setup(props) {
		const forumMember = ref<IForumMember>(props.forumMember!);
		const personalProgress = ref<IPersonalProgress>(props.forumMember?.communityMember?.personalProgress!);
		const weightListings = ref<IWeightListing[]>(
			props.forumMember?.communityMember?.personalProgress?.weightListings!
		);
		const weight = ref<number>();

		console.log(weightListings);

		const createWeightListing = async () => {
			ProgressService.createWeightListing(weight.value!, personalProgress.value.personalProgressId!).then(() => {
				window.location.reload();
				console.log("Create weightlisting done");
			});
		};

		return {
			forumMember,
			personalProgress,
			weightListings,
			weight,
			createWeightListing,
		};
	},
});
