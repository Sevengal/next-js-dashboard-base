import { AxiosResponse } from 'axios';
import { ErrorResponse } from './ErrorResponse';
import { RequestHandler } from '../RequestHandler';
import { Response } from './Response';
import { ResponseStatus } from './ResponseStatus';

export class ResponseService<T, E extends ErrorResponse = ErrorResponse>
    implements RequestHandler<T, E>
{
    private response?: Response<T> | Response<E>;

    // todo add variable for notification Store
    // todo add variable for localization Store

    // eslint-disable-next-line no-useless-constructor
    public constructor() {
        // todo add access to notification Store
        // todo add access to localization Store
    }

    public async handleRequest(
        request: Promise<AxiosResponse<T | E>>
    ): Promise<Response<T> | Response<E>> {
        try {
            console.log('trying request');
            this.response = new Response(await request) as Response<T>;
            return this.handleResponse();
            // todo other type for e in catch
        } catch (e: any) {
            if (e.response) {
                this.response = new Response<E>(e.response) as Response<E>;
                return this.handleErrorResponse();
            }
        }
        return ResponseService.makeNoResponseError() as Response<E>;
    }

    // @todo add redirect response
    private handleResponse(): Response<T> {
        return this.response as Response<T>;
    }

    private handleErrorResponse(): Response<E> {
        console.log('error response');
        if ((this.response?.getStatus() as number) >= 500) {
            // todo make a notification for 500+ error
        }
        if (this.response?.getStatus() === ResponseStatus.NO_PERMISSIONS) {
            // todo make a notification for access denied error
        }
        return this.response as Response<E>;
    }

    private static makeNoResponseError(): Response<ErrorResponse> {
        // todo add notification for no connection
        console.log('no response');
        // probably no internet connection
        return Response.make({
            message: 'No response body found',
        });
    }
}
