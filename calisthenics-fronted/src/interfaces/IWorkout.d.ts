declare interface IWorkout {
	workoutId: string;
	date: string;
	workoutType: IWorkoutType;
	workoutLocation: IWorkoutLocation;

	communityMembers: ICommunityMember[] | null;
	communityMemberWorkouts: ICommunityMemberWorkout[] | null;
}

declare interface IWorkoutPost {
	workoutId: string;
	date: Date;
	workoutTypeId: string;
	workoutLocationId: string;
	communityMembers: ICommunityMember[] | null;
	communityMemberWorkouts: ICommunityMemberWorkout[] | null;
}

declare interface IWorkoutUpdate {
	workoutId: string;
	communityMemberWorkouts: ICommunityMemberWorkout[] | null;
}
