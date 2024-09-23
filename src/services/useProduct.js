import { useQuery } from "@tanstack/react-query";
import { getProductApi } from "./apiProducts";

export function useProduct(isEditing) {
  const {
    isLoading,
    isFetching,
    data: product,
  } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProductApi(isEditing),
  });
  return { isLoading, product, isFetching };
}
