export interface SuccessResponse<T> {
  readonly success: true;
  readonly data: T;
}

export interface ErrorResponse {
  readonly success: false;
  readonly error: {
    readonly code: string;
    readonly message: string | object;
    readonly timestamp: string;
  };
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
