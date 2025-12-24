import axiosInstance from './axios';

export interface HttpClientType<TData> {
  method: 'get' | 'post' | 'put' | 'delete';
  url: string;
  data?: TData;
  headers?: Record<string, string>;
}

const httpClient = async <TData, TResponse>(httpClientConfig: HttpClientType<TData>): Promise<TResponse> => {
  const { method, url, data, headers } = httpClientConfig;
  const response = await axiosInstance<TResponse>({
    method,
    url,
    data,
    headers,
  });

  return response.data;
};

export default httpClient;
