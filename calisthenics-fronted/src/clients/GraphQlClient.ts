import { GraphQLClient } from "graphql-request";

class GraphClient{
    readonly client: GraphQLClient

    constructor() {
        const graphQL_endpoint = process.env.VUE_APP_GRAPHQL_ENDPOINT;
        const contentful_space = process.env.VUE_APP_SPACE_ID;
        const contentful_environment = process.env.VUE_APP_ENVIRONMENT;
        const graphQL_token = process.env.VUE_APP_CONTENT_DELIVERY_API_TOKEN;
        let endpoint = process.env.GRAPHQL_ENDPOINT ?? graphQL_endpoint ?? "";
        endpoint = endpoint.replace("{space}", process.env.CONTENTFUL_SPACE ?? contentful_space ?? "").replace("{environment}", process.env.CONTENTFUL_ENVIRONMENT ?? contentful_environment ?? "");
        const token = process.env.VUE_APP_CONTENT_DELIVERY_API_TOKEN ?? graphQL_token ?? "";
        this.client = new GraphQLClient(endpoint ?? "", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
      }
}

export default new GraphClient();