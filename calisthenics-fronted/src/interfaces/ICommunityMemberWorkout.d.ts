declare interface ICommunityMemberWorkout {
	communityMemberId: string;
	workoutId: string;
	communityMember: ICommunityMember | null;
	workout: IWorkout | null;
}
