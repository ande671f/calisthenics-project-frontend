declare interface IInstructorsPage {
	title: string;

	instructorsCollection: GraphQLCollection<IInstructor>;
}

declare interface IInstructorsPageResponse {
	instructorsPageCollection: GraphQLCollection<IInstructorsPage>;
}
