import { defineComponent } from "vue";
import ForumCategory from "./forumCategory/ForumCategory.vue";

export default defineComponent({
	name: "ForumCategoryList",
	components: {
		ForumCategory,
	},
	props: {},

	setup(prop) {
		// const forumCategoryList = ref<IForumCategory[]>(prop.forumCategoryList!);
		const forumCategoryList: IForumCategory[] = [
			{
				forumCategoryId: "1",
				title: "Træningsvideor",
				description: "Her har du mulighed for at dele og oprette opslag med dine træningsvideoer",
			},
			{
				forumCategoryId: "2",
				title: "Kost vejledning",
				description: "Her har du mulighed for at dele og oprette opslag med dine træningsvideoer",
			},
			{
				forumCategoryId: "3",
				title: "Hygge!",
				description: "Her har du mulighed for at dele og oprette opslag med dine træningsvideoer",
			},
			{
				forumCategoryId: "4",
				title: "Foreningsspørgsmål",
				description: "Her har du mulighed for at dele og oprette opslag med dine træningsvideoer",
			},
		];
		return {
			//categories,
			forumCategoryList,
		};
	},
});
