declare interface ICommunityMember {
	communityMemberId: string | null;
	phoneNumber: string;
	address: string;
	postalCode: string;
	city: string;
	forumMemberId: string;
}

declare interface ICommunityMemberPost {
	phoneNumber: string;
	address: string;
	postalCode: string;
	city: string;
	forumMemberId: string;
}
