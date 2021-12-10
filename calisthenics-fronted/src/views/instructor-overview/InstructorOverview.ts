import InstructorList from "@/components/instructorList/InstructorList.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import { instructorsPageQuery } from "@/queries/InstructorsPageQuery";
import cms from "@/resources/CMSResource";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "InstructorOverview",
	components: {
		NavigationBlack,
		InstructorList,
	},
	setup() {
		const instructorsPage = ref<IInstructorsPage>();
		const getInstructorsPage = async () => {
			cms.getDataAsync<IInstructorsPageResponse>(instructorsPageQuery).then((response) => {
				instructorsPage.value = response.data?.instructorsPageCollection.items[0] || undefined;
				console.log("Her tjekkes.", instructorsPage.value);
			});
		};
		onMounted(() => {
			getInstructorsPage();
		});

		return {
			instructorsPage,
		};
	},
});
