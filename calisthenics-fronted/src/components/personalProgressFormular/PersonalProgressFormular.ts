import ProgressService from "@/services/ProgressService";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "PersonalProgressFormular",
	props: {
		forumMember: Object as () => IForumMember,
	},
	setup(props) {
		const forumMember = ref<IForumMember>(props.forumMember!);
		const personalProgress = ref<IPersonalProgress>(props.forumMember?.communityMember?.personalProgress!);

		console.log(forumMember);

		const createPersonalProgress = async () => {
			ProgressService.createPersonalProgress(forumMember.value?.communityMember?.communityMemberId!).then(
				(response) => {
					personalProgress.value = response;
				}
			);
		};

		const updatePersonalProgress = async () => {
			ProgressService.updatePersonalProgress(personalProgress.value).then(() => {
				console.log("jeg har sku lige opdateret dig?");
				window.location.reload();
			});
		};

		return {
			forumMember,
			personalProgress,
			createPersonalProgress,
			updatePersonalProgress,
		};
	},
});
