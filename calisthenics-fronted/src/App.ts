import { computed, defineComponent, onBeforeMount } from "vue";
import { useStore } from "vuex";
import Footer from "./components/footer/Footer.vue";
import { auth } from "./firebase";
import { key } from "./store";

export default defineComponent({
	name: "App",
	components: {
		Footer,
	},
	setup() {
		const store = useStore(key);

		const forumMember = computed(() => {
			return store.state.forumMember;
		});

		onBeforeMount(() => {
			auth.onAuthStateChanged((user) => {
				if (!user) {
					console.log("DER ER INGEN BRUGER HER!");
				} else {
					console.log("JEG SÆTTER DIN BRUGER NU");
					store.dispatch("getForumMember", user.uid);
				}
			});
		});
		return {
			forumMember,
		};
	},
});
