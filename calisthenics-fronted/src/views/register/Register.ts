import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import { auth } from "@/firebase";
import router from "@/router";
import LoginService from "@/services/LoginService";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "Register",
	components: {
		NavigationBlack,
	},
	setup() {
		const email = ref("");
		const password = ref("");
		const name = ref("");

		const createForumMember = async () => {
			createUserWithEmailAndPassword(auth, email.value, password.value)
				.then((userCredentials) => {
					const user = userCredentials.user;
					LoginService.createForumMember(user.uid, name.value, email.value).then((response) => {
						console.log("Forum member created");
					});
					router.push("/");
				})
				.catch((error) => {
					alert("Fejl ved registrering...");
				});
		};
		return {
			email,
			password,
			name,
			createForumMember,
		};
	},
});
