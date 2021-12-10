declare interface IForumPost {
	forumPostId: string;
	title: string;
	description: string;
	date: string;
	forumCategoryId: string | null;
	forumCategory: IForumCategory | null;
	forumMemberId: string | null;
}
