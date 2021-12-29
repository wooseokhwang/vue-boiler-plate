import { fetchCouponListApi } from '@/api/repository/couponRepository';

export async function fetchCouponList(lastId?: string) {
  const response = await fetchCouponListApi(lastId);
  const couponList = response.data.result.list;
  return couponList;
}
