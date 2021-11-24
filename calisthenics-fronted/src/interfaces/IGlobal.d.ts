declare interface IGraphQLVariables {
	id?: string;
	locale?: string;
	limit?: number;
	preview?: boolean;
	slug?: string;
	order?: string[];
	tags?: string | string[];
}

declare interface GraphQLPage {
	title: string;
	asset: { url: string };
	seo: GraphQLSeo;
	__typename?: string;
	slug: string;
	parent?: GraphQLPage;
	parentSlug?: string;
}

declare interface GraphQLCollection<T> {
	items: T[];
}
