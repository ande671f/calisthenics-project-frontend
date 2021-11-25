import { auth } from "@/firebase";
import router from "@/router";
import { signOut } from "@firebase/auth";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
	name: "NavigationWhite",
	setup() {
		const store = useStore(key);

		const loggedInForumMember = computed(() => {
			return store.state.forumMember;
		})

		const logout = () => {
			signOut(auth)
				.then(() => {
					console.log("Du er nu logget ud");
					router.push("/");
				})
				.catch((error) => {
					console.log(error);
				});
		};

		return {
			logout,
			loggedInForumMember,
		};
	},
});
