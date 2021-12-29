import httpClient from '@/api/client/httpClient';
import { Coupon } from '@/models/coupon';

export function fetchCouponListApi(lastId?: string) {
  return httpClient.get<{ list: Coupon[] }>({
    url: 'coupons',
    params: {
      id: lastId,
    },
  });
}
