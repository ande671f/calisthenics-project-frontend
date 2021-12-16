declare interface IPersonalProgress {
	personalProgressId: string;
	height: number;
	age: number;
	gender: Gender;
	communityMemberId: string;
	weightListings: IWeightListing[] | null;
}

enum Gender {
	Woman,
	Man,
}
