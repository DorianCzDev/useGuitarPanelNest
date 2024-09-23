import { useQuery } from "@tanstack/react-query";
import { getOrderApi } from "./apiOrders";

export function useOrder(id) {
  const {
    isLoading,
    isFetching,
    data: order,
  } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOrderApi(id),
  });
  return { isLoading, order, isFetching };
}
