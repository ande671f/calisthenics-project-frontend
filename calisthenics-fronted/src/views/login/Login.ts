import { defineComponent, ref } from "vue";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";

export default defineComponent({
	name: "Login",
	setup() {
        const email = ref("");
        const password = ref("");

        const Login = () => {            
            signInWithEmailAndPassword(auth, email.value, password.value).then((userCredentials) => {
                const user = userCredentials.user;
                console.log(userCredentials);
                
            }).catch((error) => {
                alert("Fejl ved login...")
            })
        }

        return{
            email,
            password,
            Login
        }
	},
});