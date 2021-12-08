import ForumCommentFormular from "@/components/forumPostContent/forumCommentFormular/ForumCommentFormular.vue";
import ForumCommentList from "@/components/forumPostContent/forumCommentList/ForumCommentList.vue";
import ForumPostDetails from "@/components/forumPostContent/forumPostDetails/ForumPostDetails.vue";
import NavigationBlack from "@/components/navigation/navigationBlack/NavigationBlack.vue";
import PageHeader from "@/components/pageHeader/PageHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "ForumComments",
	components: {
		NavigationBlack,
		PageHeader,
		ForumCommentList,
		ForumCommentFormular,
		ForumPostDetails,
	},

	setup() {
		const pageHeaderTitle = "Kommentarer";
		return {
			pageHeaderTitle,
		};
	},
});
