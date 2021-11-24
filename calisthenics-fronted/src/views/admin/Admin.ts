import AdminService from "@/services/AdminService";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "Admin",
	setup() {
		const forumMembers = ref<IForumMember[]>();

		const getForumMembers = async () => {
			AdminService.getForumMembers().then((response) => {
				console.log("TEEEEEEEEEEEEEST", response);
				forumMembers.value = response;
			});
		};

		onMounted(() => {
			getForumMembers();
		});

		return {
			forumMembers,
		};

		return {};
	},
});
