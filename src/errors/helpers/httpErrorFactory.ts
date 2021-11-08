import { HttpErrorResponse } from "../../schemas/Errors";

export default function httpErrorFactory(status: number, message?: string) {
  switch (status) {
    case 400:
      return {
        status: status,
        message:
          "Bad request. Check if headers and fields are present and well-formed.",
      } as HttpErrorResponse;
    case 401:
      return {
        status: status,
        message: "Unauthorized. Token is not valid.",
      } as HttpErrorResponse;
    case 403:
      return {
        status: status,
        message: "Forbidden. Server cannot perform the operation",
      } as HttpErrorResponse;
    case 404:
      return { status: status, message } as HttpErrorResponse;
    case 409:
      return { status: status, message } as HttpErrorResponse;
    default:
      return {
        status: status,
        message:
          "Internal server error. Server cannot perform the operation due to certain events.",
      } as HttpErrorResponse;
  }
}
