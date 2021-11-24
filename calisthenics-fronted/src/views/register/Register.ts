import { defineComponent, ref } from "vue";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export default defineComponent({
	name: "Register",
	setup() {
        const email = ref("");
        const password = ref("");

        const Register = () => {            
            createUserWithEmailAndPassword(auth, email.value, password.value).then((userCredentials) => {
                const user = userCredentials.user;
            }).catch((error) => {
                alert("Fejl ved registrering...")
            })
        }
        return{
            email,
            password,
            Register
        }
	},
});