import About from "@/components/about/About.vue";
import Hero from "@/components/hero/Hero.vue";
import About from "@/components/about/About.vue";	
import { defineComponent, onMounted, ref } from "vue";
import ReviewList from "@/components/reviewlist/ReviewList.vue";
import cms from "@/resources/CMSResource";
import { frontPageQuery } from "@/queries/FrontPageQuery";

export default defineComponent({
	name: "Home",
	components: {
		Hero,
		About,
		ReviewList,
	},
	setup() {

		const frontPage = ref<IFrontPage>();

		// getting frontpage query
		const getFrontPage = async () => {
			cms.getDataAsync<IFrontPageResponse>(frontPageQuery).then((response) => {
				console.log("response:", response.data?.frontPageCollection.items[0]);
				frontPage.value = response.data?.frontPageCollection.items[0] || undefined;
				console.log("frontpage value:", frontPage.value)
			});
		};
		
		// lifecycle hook which gets run when setup() runs
		onMounted(() => {
			getFrontPage();
		})

		return {
			frontPage,
		};
	},
});
