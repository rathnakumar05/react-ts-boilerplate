import { useQuery } from '@tanstack/react-query';
import { useHomeRequests } from '../requests';
import type { IpResponse } from '../types';

export const useIpQuery = (enable: boolean) => {
  const { getIp } = useHomeRequests();
  return useQuery<IpResponse>({
    queryKey: ['ip'],
    queryFn: getIp,
    enabled: enable,
    throwOnError: false,
  });
};
