import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "./apiProducts";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sortBy = searchParams.get("sortBy");
  const name = searchParams.get("name");
  const page = searchParams.get("page");

  const {
    isLoading,
    data: { productsCount, products } = {},
    error,
  } = useQuery({
    queryKey: ["products", sortBy, name, page],
    queryFn: () => getProductsApi(sortBy, name, page),
  });
  if (error?.message === "Authentication Invalid") {
    navigate("/login");
  }
  return { isLoading, products, productsCount };
}
