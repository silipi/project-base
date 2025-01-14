import { BaseErrorResponse, ErrorCode } from './types';

const errorCodes = {
  [ErrorCode.USER_ALREADY_EXISTS]: 'User already exists',
  [ErrorCode.INVALID_CREDENTIALS]: 'Invalid credentials',
  [ErrorCode.USER_NOT_FOUND]: 'User not found, please register!',
  unknown: 'Unexpected error, please try again later',
};

export const parseErrorMessage = (error: BaseErrorResponse) => {
  const errorMessage = errorCodes[error.response?.data.errorCode ?? 'unknown'];

  return errorMessage;
};
