import { defineComponent } from "vue";
import ForumPost from "./forumPost/ForumPost.vue";

export default defineComponent({
	name: "ForumList",

	components: {
		ForumPost,
	},

	setup() {
		const posts: IForumPost[] = [
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description:
					"Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert??Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert??Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert??Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert??",
				date: "12-11-2021",
			},
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description: "Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???",
				date: "12-11-2021",
			},
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description: "Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???",
				date: "12-11-2021",
			},
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description: "Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???",
				date: "12-11-2021",
			},
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description: "Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???",
				date: "12-11-2021",
			},
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description: "Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???",
				date: "12-11-2021",
			},
			{
				forumPostId: "1",
				title: "Prøv lige at se min front lever! Kan I hjælpe mig?",
				description: "Jeg har brug for hjælp til at lave min front lever hvad er det jeg gør forkert???",
				date: "12-11-2021",
			},
		];
		return {
			posts,
		};
	},
});
