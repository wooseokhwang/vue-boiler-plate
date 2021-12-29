import { AxiosRequestConfig } from 'axios';

export type HttpClientRequestConfig = Omit<AxiosRequestConfig, 'method'>;
export interface HttpClientRequestOptions {
  requiresToken: boolean;
}

export interface HttpClientResponse<T> {
  result: T;
  header: { resultMessage: string };
}
