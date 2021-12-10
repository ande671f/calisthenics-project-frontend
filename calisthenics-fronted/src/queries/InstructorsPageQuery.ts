import { gql } from "graphql-tag";

export const instructorFragment = gql`
	fragment Instructor on Instructor {
		name
		age
		description
		profileImage {
			url
		}
		sys {
			id
		}
	}
`;

export const instructorsPageQuery = gql`
	query ($preview: Boolean) {
		instructorsPageCollection(locale: "en-US", preview: $preview, limit: 1) {
			items {
				title
				instructorsCollection {
					items {
						...Instructor
					}
				}
				sys {
					id
				}
			}
		}
	}

	${instructorFragment}
`;
