declare interface IForumMember {
	forumMemberId: string;
	name: string;
	email: string;
	communityMember: ICommunityMember | null;
}

declare interface IForumMemberPost {
	name: string;
	email: string;
	communityMember: ICommunityMember | null;
}
