/**
 * Jwt response object received from the server upon auth
 */
interface PassportJwtObject {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  single_session_token?: string;
}

export default PassportJwtObject;
