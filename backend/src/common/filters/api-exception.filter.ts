import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiException } from '../exceptions/api.exception';

@Catch(HttpException)
export class ApiExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (exception instanceof ApiException) {
      const errorResponse = exception.getResponse() as {
        errorCode: string;
        metadata?: Record<string, any>;
      };

      return response.status(status).json({
        statusCode: status,
        errorCode: errorResponse.errorCode,
        metadata: errorResponse.metadata,
      });
    }

    return response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
