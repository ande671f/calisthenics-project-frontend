import {gql} from "graphql-tag";

export const reivewFragment=gql`
fragment Review on Review {
    name
    message
    sys {
      id
    }
  }  
`;

export const frontPageQuery=gql`
query($preview: Boolean) {
    frontPageCollection(locale:"en-US", preview:$preview) {
      items {
        title
        manchet
        aboutTitle
        about
        reviewsCollection {
            items {
              ...Review
            }
        }
        sys {
            id
        }
      }
    }
  }

  ${reivewFragment}
`;

