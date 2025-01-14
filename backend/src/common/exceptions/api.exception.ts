import { HttpException } from '@nestjs/common';
import { ErrorCode } from './error-codes.enum';

export class ApiException extends HttpException {
  constructor(
    errorCode: ErrorCode,
    statusCode: number,
    metadata?: Record<string, any>,
  ) {
    super(
      {
        errorCode,
        metadata,
      },
      statusCode,
    );
  }
}
