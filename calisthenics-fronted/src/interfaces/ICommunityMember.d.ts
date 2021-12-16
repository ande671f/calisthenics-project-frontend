declare interface ICommunityMember {
	communityMemberId: string | null;
	phoneNumber: string;
	address: string;
	postalCode: string;
	city: string;
	isInstructor: boolean;
	forumMemberId: string;

	workouts: IWorkout[] | null;
	personalProgress: IPersonalProgress | null;
}
