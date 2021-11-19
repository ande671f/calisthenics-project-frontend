import { createClient, PlainClientAPI } from 'contentful-management'

class ContentfulManagementClient{
    private token = process.env.VUE_APP_CONTENTFUL_MANAGEMENT_TOKEN ?? "";  
    private contentful_space = process.env.VUE_APP_SPACE_ID;
    private contentful_environment = process.env.VUE_APP_ENVIRONMENT;

    readonly client: PlainClientAPI;

    constructor(){
    this.client =  createClient({
        // This is the access token for this space. Normally you get the token in the Contentful web app
        accessToken: this.token,
      },
      {
        type: 'plain',
        defaults: {
            spaceId: this.contentful_space,
            environmentId: this.contentful_environment,
        },
      })
    }

}

export default new ContentfulManagementClient();