import { useQuery } from "@tanstack/react-query";
import { getDeliveryMethodApi } from "./apiDeliveries";

export function useDelivery(isEditing) {
  const { isFetching, data: delivery } = useQuery({
    queryKey: ["delivery"],
    queryFn: () => getDeliveryMethodApi(isEditing),
  });
  return { isFetching, delivery };
}
