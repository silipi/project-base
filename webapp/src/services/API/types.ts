import { AxiosError } from 'axios';

export enum ErrorCode {
  USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
}

export type BaseErrorResponse = AxiosError<{
  statusCode: number;
  errorCode: ErrorCode;
}>;
