import { auth } from "@/firebase";
import router from "@/router";
import { signOut } from "@firebase/auth";
import { defineComponent } from "vue";

export default defineComponent({
	name: "NavigationWhite",
	setup() {
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
		};
	},
});
