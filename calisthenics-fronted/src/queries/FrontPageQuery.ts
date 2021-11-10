import {gql} from "graphql-tag";

export const frontPageQuery=gql`
query($preview: Boolean) {
    frontPageCollection(locale:"en-US", preview:$preview) {
      items {
        title
        manchet
        about
        sys {
            id
        }
      }
    }
  }
  `;
