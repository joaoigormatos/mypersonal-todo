export type HttpErrorResponse = {
  status: number;
  message: string;
};

export enum ExceptionType {
  NOT_FOUND = 404,
  DUPLICATE = 409,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
}
