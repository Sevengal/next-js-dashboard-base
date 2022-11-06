export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  INVALID_REQUEST = 400,
  INVALID_CREDENTIALS = 401,
  NO_PERMISSIONS = 403,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
}
