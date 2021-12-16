import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import PersonalProgressBMI from "@/components/personalProgressBMI/PersonalProgressBMI.vue";
import PersonalProgressFormular from "@/components/personalProgressFormular/PersonalProgressFormular.vue";
import PersonalProgressWeight from "@/components/personalProgressWeight/PersonalProgressWeight.vue";
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "PersonalProgress",
	components: {
		NavigationBlack,
		PageHeader,
		PersonalProgressFormular,
		PersonalProgressBMI,
		PersonalProgressWeight,
	},
	setup() {
		const pageHeaderTitle = "Træningsforløb";
		const store = useStore(key);

		const forumMember = computed(() => store.state.forumMember);

		return {
			forumMember,
			pageHeaderTitle,
		};
	},
});
