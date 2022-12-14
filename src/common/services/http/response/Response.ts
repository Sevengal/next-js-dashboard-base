import * as Axios from 'axios';
import ErrorResponse from '@custom-types/response/ErrorResponse';

export class Response<T> {
  private readonly axiosResponse?: Axios.AxiosResponse<T>;

  private readonly status?: number;

  private readonly potentialBody?: T;

  public constructor(
    axiosResponse?: Axios.AxiosResponse<T>,
    body?: T,
    status?: number
  ) {
    this.axiosResponse = axiosResponse;
    if (!this.axiosResponse) {
      this.potentialBody = body;
      this.status = status;
    } else {
      this.status = this.axiosResponse.status;
    }
  }

  public getStatus(): number | undefined {
    if (this.axiosResponse) return this.axiosResponse.status;
    return this.status;
  }

  public getData(): T | null {
    if (this.axiosResponse) return this.axiosResponse.data;
    if (this.potentialBody) return this.potentialBody;
    return null;
  }

  public static make(
    body: ErrorResponse,
    status?: number
  ): Response<ErrorResponse> {
    return new Response(undefined, body, status);
  }
}
