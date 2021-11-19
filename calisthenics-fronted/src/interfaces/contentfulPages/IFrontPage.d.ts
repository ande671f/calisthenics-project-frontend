declare interface IFrontPage {
    title: string;
    manchet: string;
    about: string;
    aboutTitle: string;

    reviewCollection: GraphQLCollection<IReview>;
}

declare interface IFrontPageResponse {
    frontPageCollection: GraphQLCollection<IFrontPage>
}