import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpClientRequestConfig,
  HttpClientRequestOptions,
  HttpClientResponse,
} from '@/models/httpClient';

// FIXME : sample token
const token = '1';

class HttpClient {
  private $axios = axios;
  private baseURL = process.env.VUE_APP_API_BASE_URL;
  private $axiosInstance = this.$axios.create({ baseURL: this.baseURL });
  private defaultTimeout = 2 * 1000;

  async get<T>(
    config: HttpClientRequestConfig,
    options?: HttpClientRequestOptions,
  ) {
    return this.apiCall<T>({ ...config, method: 'get' }, options);
  }
  async post<T>(
    config: HttpClientRequestConfig,
    options?: HttpClientRequestOptions,
  ) {
    return this.apiCall<T>({ ...config, method: 'post' }, options);
  }
  async put<T>(
    config: HttpClientRequestConfig,
    options?: HttpClientRequestOptions,
  ) {
    return this.apiCall<T>({ ...config, method: 'put' }, options);
  }
  async delete<T>(
    config: HttpClientRequestConfig,
    options?: HttpClientRequestOptions,
  ) {
    return this.apiCall<T>({ ...config, method: 'delete' }, options);
  }
  async patch<T>(
    config: HttpClientRequestConfig,
    options?: HttpClientRequestOptions,
  ) {
    return this.apiCall<T>({ ...config, method: 'patch' }, options);
  }

  private async apiCall<T = unknown>(
    config: AxiosRequestConfig,
    options?: HttpClientRequestOptions,
  ): Promise<AxiosResponse<HttpClientResponse<T>>> {
    const requiresToken = options?.requiresToken ?? true;

    config.headers = config.headers || {
      'content-type': 'application/json',
    };

    if (requiresToken && token) {
      config.headers.Authorization = token;
    }

    config.timeout = config.timeout || this.defaultTimeout;

    let res;
    try {
      res = await this.$axiosInstance(config);
    } catch (error) {
      // TODO : 공통 에러 처리
      console.error('HttpClient error', error);
      res = Promise.reject(error);
    }

    return res;
  }
}

export default new HttpClient();
