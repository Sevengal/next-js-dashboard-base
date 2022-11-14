import * as Axios from 'axios';
import { Response } from './response/Response';

export interface RequestHandler<T, E> {
    handleRequest(
        request: Promise<Axios.AxiosResponse<T>>
    ): Promise<Response<T> | Response<E>>;
}
