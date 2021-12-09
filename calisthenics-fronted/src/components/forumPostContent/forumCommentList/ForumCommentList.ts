import { defineComponent } from "vue";
import ForumComment from "./forumComment/ForumComment.vue";

export default defineComponent({
	name: "ForumCommentList",

	components: {
		ForumComment,
	},

	setup() {
		const comments: IForumComment[] = [
			{
				forumCommentId: "1",
				description:
					"Hej Anders. Umiddelbart ser din frontlever meget fint ud, dog vil jeg anbefale dig at styrke din core (ryg, mave), noget mere. Dette vil hjælpe med din frontlever. Vh.",
				date: "07-12-2021",
			},
			{
				forumCommentId: "2",
				description: "Hej mester Güray. Tak for dit svar. Det vil jeg arbejde på.",
				date: "08-12-2021",
			},
			{
				forumCommentId: "3",
				description:
					"Hej Alle sammen! Jeg skal på barsel nu, så i kommer ikke til at møde mig på holdtræningerne.....",
				date: "08-12-2021",
			},
		];
		return {
			comments,
		};
	},
});
