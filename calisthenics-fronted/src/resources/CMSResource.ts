import { GraphQLError } from "graphql/error";
import { DocumentNode } from "graphql/language/ast";
import GraphClient from "../clients/GraphQlClient";
class CMSResource {
  readonly previewUrl = "<previewurl>";
  readonly setPreviewBool = process.env.BASE_URL === this.previewUrl;
  readonly defaultVariables: IGraphQLVariables = { preview: this.setPreviewBool, locale: process.env.LOCALE };

  // get data function with query paramater
  public getDataAsync = async <T>(query: DocumentNode, variables: IGraphQLVariables = {}) => {
    const mergedVariables = Object.assign({}, this.defaultVariables, variables);
    try {
      const r = await GraphClient.client.request(query, mergedVariables);
      const response = this.handleResponse<T>(r);
      return response;
    } catch (error: any) {
      return this.getErrorResponse<T>(error);
    }
  };

  // create response function to handle errors
  private handleResponse = async <T>(response: any) : Promise<GraphQLResponse<T>> => {
    const data = await response;
    const { errors, status } = response;
    return {
      data,
      errors,
      status,
    };
  };

  // catch error
  private getErrorResponse = <T>(error: any) : GraphQLResponse<T> => {
    const { errors, status } = error.response;
    return {
      status: status,
      errors: errors,
    };
  };
}

const cms = new CMSResource();
export default cms;

interface GraphQLResponse<T>{
  data?: T;
  status: number;
  errors?: GraphQLError[];
}