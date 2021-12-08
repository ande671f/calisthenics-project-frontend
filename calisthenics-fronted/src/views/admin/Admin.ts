import AdminService from "@/services/AdminService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "Admin",
	setup() {
		const forumMembers = ref<IForumMember[]>();
		const selectedForumMember = ref<IForumMember>();

		const getForumMembers = async () => {
			AdminService.getForumMembers().then((response) => {
				console.log(response);
				forumMembers.value = response;
			});
		};

		const deleteForumMember = async () => {
			AdminService.deleteForumMember(selectedForumMember.value?.forumMemberId!).then(() => {
				if (selectedForumMember.value != null) {
					selectedForumMember.value = undefined;
				}
			});
		};

		const createCommunityMember = async () => {
			const communityMember = AdminService.createCommunityMember(selectedForumMember.value?.forumMemberId!).then(
				(response) => {
					if (selectedForumMember.value != null) {
						selectedForumMember.value.communityMember = response;
					}
				}
			);
		};

		const updateCommunityMember = async () => {
			const communityMember = AdminService.updateCommunityMember(
				selectedForumMember.value?.communityMember!
			).then((response) => {
				if (selectedForumMember.value != null) {
					console.log(response);
				}
			});
		};

		const deleteCommunityMember = async () => {
			AdminService.deleteCommunityMember(selectedForumMember.value?.communityMember?.communityMemberId!).then(
				() => {
					if (selectedForumMember.value != null) {
						selectedForumMember.value.communityMember = null;
					}
				}
			);
		};

		onMounted(() => {
			getForumMembers();
		});

		return {
			forumMembers,
			selectedForumMember,
			deleteForumMember,
			createCommunityMember,
			updateCommunityMember,
			deleteCommunityMember,
		};
	},
});
