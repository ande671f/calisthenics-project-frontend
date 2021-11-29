import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import { auth } from "@/firebase";
import router from "@/router";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Login",
	components: {
		NavigationBlack,
	},
	setup() {
		const email = ref("");
		const password = ref("");

		const login = () => {
			signInWithEmailAndPassword(auth, email.value, password.value)
				.then((userCredentials) => {
					const user = userCredentials.user;
					router.push("/");
				})
				.catch((error) => {
					alert("Fejl ved login...");
				});
		};

		return {
			email,
			password,
			login,
		};
	},
});
