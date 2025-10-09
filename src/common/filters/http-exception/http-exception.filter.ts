import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '@/interfaces';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    const errorDetails = exception.getResponse() as {
      message: string | Record<string, any>;
      error: string;
      statusCode: number;
    };

    const responseBody: ErrorResponse = {
      success: false,
      error: {
        code: status.toString(),
        message: errorDetails.message,
        timestamp: new Date().toISOString(),
      },
    };

    response.status(status).json(responseBody);
  }
}
