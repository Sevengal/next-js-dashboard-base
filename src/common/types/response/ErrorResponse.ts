interface ErrorResponse {
  message?: string;
  message_details?: string;
  errors?: any;
  type?: string;
}

export default ErrorResponse;
