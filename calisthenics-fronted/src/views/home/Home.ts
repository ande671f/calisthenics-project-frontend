import About from "@/components/about/About.vue";
import Hero from "@/components/hero/Hero.vue";
import ReviewList from "@/components/reviewlist/ReviewList.vue";
import { frontPageQuery } from "@/queries/FrontPageQuery";
import cms from "@/resources/CMSResource";
import { key } from "@/store";
//import About from "@/components/about/About.vue";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "Home",
	components: {
		Hero,
		About,
		ReviewList,
	},
	setup() {
		const store = useStore(key);

		const forumMember = computed(() => {
			return store.state.forumMember;
		});

		watch(forumMember, (newValue, oldValue) => {
			console.log("The new user value is: " + forumMember.value);
		});

		const frontPage = ref<IFrontPage>();

		// getting frontpage query
		const getFrontPage = async () => {
			cms.getDataAsync<IFrontPageResponse>(frontPageQuery).then((response) => {
				console.log("response:", response.data?.frontPageCollection.items[0]);
				frontPage.value = response.data?.frontPageCollection.items[0] || undefined;
				console.log("frontpage value:", frontPage.value);
			});
		};

		// lifecycle hook which gets run when setup() runs
		onMounted(() => {
			getFrontPage();
		});

		return {
			frontPage,
			forumMember,
		};
	},
});
