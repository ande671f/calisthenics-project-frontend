import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "About",
	props: {
		propAboutTitle: String,
		propAbout: String,
	},
    
	setup(props) {
		const aboutTitle=ref<string>(props.propAboutTitle!)
		const about=ref<string>(props.propAbout!)

		console.log("prop about title:", aboutTitle.value)
		console.log("prop about", about.value)
		return {
			aboutTitle,
			about,
		};
	},
});

