import emailjs from "emailjs-com";
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "RegisterFormular",

	// Clear felter efter sendEmail køres og indfør validering på felterne (regex validation))
	// max 200 mails pr måned
	setup() {
		const form = ref<HTMLFormElement | string>();
		const service = process.env.VUE_APP_SERVICEID_KEY!;
		const template = process.env.VUE_APP_TEMPLATEID_KEY!;
		const userId = process.env.VUE_APP_USERID_KEY!;

		const sendEmail = () => {
			if (form.value != undefined) {
				emailjs
					.sendForm(service, template, form.value, userId)
					.then((result) => {
						console.log("SUCCESS", result.text);
					})
					.catch((error) => {
						console.log("ERROR", error.text);
					});
			}
		};
		return {
			form,
			sendEmail,
		};
	},
});
