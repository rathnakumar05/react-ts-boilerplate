import { Global } from '../../../constants/global';
import type { IpResponse } from '../types';
import httpClient from '../../../utils/httpClient';

export type HomeRequests = {
  getIp: () => Promise<IpResponse>;
};

export const useHomeRequests = (): HomeRequests => {
  const getIp = (): Promise<IpResponse> => {
    return httpClient<null, IpResponse>({
      method: 'get',
      url: `${Global.base_url}/?format=json`,
    });
  };

  return {
    getIp,
  };
};
