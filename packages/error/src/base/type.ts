import { THttpStatus } from "@nextbnb/common";

/**
 * @public
 * Interface for the BaseError instance
 */
export interface IBaseError {
  message: string;
  status: string;
  statusCode: THttpStatus;
}
