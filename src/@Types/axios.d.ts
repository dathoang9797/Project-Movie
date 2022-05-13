import axios from 'axios';

type MyHeader = {
  headers?: {
    TokenCybersoft?: string;
    isLoading?: boolean;
    Authorization?: string;
  };
};
declare module 'axios' {
  export interface MyAxiosResponse extends AxiosResponse {
    config: AxiosRequestConfig<D> & MyHeader;
  }

  export interface MyAxiosError extends AxiosError {
    config: AxiosRequestConfig<D> & MyHeader;
  }

  export interface AxiosInstance extends Axios {
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig & MyHeader>;
      response: AxiosInterceptorManager<MyAxiosResponse>;
    };
  }

  export interface AxiosInterceptorManager<V> {
    use<T = V>(
      onFulfilled?: (value: V) => T | Promise<T>,
      onRejected?: (error: MyAxiosError) => any
    ): number;
    eject(id: number): void;
  }

  export interface AxiosInstance {
    request<T = any>(config: AxiosRequestConfig & MyHeader): Promise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    post<T = any>(url: string, data?: any, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    put<T = any>(url: string, data?: any, config?: AxiosRequestConfig & MyHeader): Promise<T>;
    patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig & MyHeader): Promise<T>;
  }
}
