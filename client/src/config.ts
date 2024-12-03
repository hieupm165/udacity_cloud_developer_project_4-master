// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '2vlvhw21wb'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'huaanhminh.us.auth0.com',            // Auth0 domain
  // clientId: '1JV51fN7bDMVPlFjtmvi6fda0HXzuF2K',          // Auth0 client id
  clientId: 'bsUpkcmcHgoYbuKpTHa0OGXtMjycXMhq',
  callbackUrl: 'http://localhost:3000/callback'
}
