import * as Axios from 'axios';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Response } from './response/Response';
import { ErrorResponse } from './response/ErrorResponse';
import { ResponseService } from './response/ResponseService';
// import { StorageStore } from '../Storage/StorageStore';
import { StoredJwt } from './jwt/StoredJwt';
import { ResponseStatus } from './response/ResponseStatus';
// import history from '../utils/history';
import { PassportJwtObject } from './jwt/PassportJwtObject';
import { StorageService } from '../Storage/StorageService';

class AxiosClient {
  private instance: Axios.AxiosInstance;

  private store: any = undefined;

  private responseService: ResponseService<any, any>;

  constructor() {
    this.instance = Axios.default.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      // timeout: 1000,
      headers: {
        'Content-Type': 'application/vnd.api+json',
        Accept: 'application/vnd.api+json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      withCredentials: true,
    });
    this.responseService = new ResponseService<any, any>();
    this.initInterceptors();
  }

  // only way to prevent circular imports is to inject the store from index.tsx
  public injectStore = (store: any): void => {
    this.store = store;
  };

  public refreshSession = async (): Promise<void> => {
    const storage = new StorageService(sessionStorage);
    const tokenObject = storage.getItem<StoredJwt>('jwt', true);

    if (tokenObject) {
      const response = await this.post<PassportJwtObject>(
        'oauth/token',
        {
          grant_type: 'refresh_token',
          refresh_token: tokenObject.refresh_token,
          client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
          client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
          scope: '*',
        },
        false
      );
      if (response.getStatus() === ResponseStatus.OK) {
        const jwt = response.getData() as PassportJwtObject;

        storage.setItem('jwt', {
          access_token: jwt.access_token,
          refresh_token: jwt.refresh_token,
        });
      } else {
        // history.push('/logout');
        throw new Error('could not refresh token');
      }
    } else {
      // history.push('/logout');
      throw new Error('could not refresh token');
    }
  };

  // eslint-disable-next-line class-methods-use-this
  public getAccessHeaderString = (): string => {
    const storage = new StorageService(sessionStorage);
    const tokenObject = storage.getItem<StoredJwt>('jwt', true);
    if (tokenObject) {
      return `Bearer ${(tokenObject as StoredJwt).access_token}`;
    }
    return '';
  };

  public async request<T, E extends ErrorResponse = ErrorResponse>(
    config: Axios.AxiosRequestConfig
  ): Promise<Response<T> | Response<E>> {
    return this.responseService.handleRequest(this.instance.request<T>(config));
  }

  public get = <T, E extends ErrorResponse = ErrorResponse>(
    url: string
    // token = true
  ): Promise<Response<T> | Response<E>> => {
    return this.request<T, E>({
      method: 'get',
      url,
    });
  };

  public post = <T, E extends ErrorResponse = ErrorResponse>(
    url: string,
    payload: any,
    // token = true,
    config: Axios.AxiosRequestConfig = {}
  ): Promise<Response<T> | Response<E>> => {
    return this.request<T, E>({
      method: 'post',
      url,
      data: { ...payload },
      ...config,
    });
  };

  public patch = <T, E extends ErrorResponse = ErrorResponse>(
    url: string,
    payload: any,
    // token = true,
    config: Axios.AxiosRequestConfig = {}
  ): Promise<Response<T> | Response<E>> => {
    return this.request<T, E>({
      method: 'patch',
      url,
      data: { ...payload },
      ...config,
    });
  };

  public delete = <T, E extends ErrorResponse = ErrorResponse>(
    url: string,
    payload: any,
    // token = true,
    config: Axios.AxiosRequestConfig = {}
  ): Promise<Response<T> | Response<E>> => {
    return this.request<T, E>({
      method: 'delete',
      url,
      data: { ...payload },
      ...config,
    });
  };

  private initInterceptors = (): void => {
    this.initAccessHeaderInterceptor();
    this.initRefreshTokenInterceptor();
    // this.initLoginInterceptor();
  };

  /*
   * RESPONSE INTERCEPTORS
   */

  private initRefreshTokenInterceptor = (): void => {
    this.instance.interceptors.response.use(
      async (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        console.warn('Failed request should retry request in a bit');
        if (
          error.config &&
          error.response &&
          error.response?.status === ResponseStatus.INVALID_CREDENTIALS
        ) {
          const originalRequest = error.config;

          if (originalRequest.url !== `oauth/token`) {
            if (error.response?.status === ResponseStatus.INVALID_CREDENTIALS) {
              await this.refreshSession();

              // todo if valid token is present retry original request
              console.debug('retrying request');
              return this.instance.request(originalRequest);
            }
          }
        }
        return Promise.reject(error);
      }
    );
  };

  /*
   * REQUEST INTERCEPTORS
   */

  // private initLoginInterceptor = () => {
  //     this.instance.interceptors.request.use(
  //         async (config: AxiosRequestConfig) => {
  //             if (config.url === `oauth/token`) {
  //                 config.withCredentials = false;
  //             }
  //             return config
  //         }
  //     )
  // }

  private initAccessHeaderInterceptor = (): void => {
    this.instance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        // todo after implementation of correct cookie config remove withCredentials = false
        // eslint-disable-next-line no-param-reassign
        config.withCredentials = false;
        if (config.url !== `oauth/token`) {
          // eslint-disable-next-line no-param-reassign,@typescript-eslint/ban-ts-comment
          // @ts-ignore
          config.headers?.Authorization = this.getAccessHeaderString();
          // config.headers!.Authorization = this.getAccessHeaderString();
        }
        return config;
      }
    );
  };
}

const Api = new AxiosClient();
export default Api;
