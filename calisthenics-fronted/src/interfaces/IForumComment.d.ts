declare interface IForumComment {
	forumCommentId: string;
	description: string;
	date: Date | null;
	forumMember: IForumMember | null;
	forumMemberId: string;
	forumPostId: string;
}
