import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getOrdersApi } from "./apiOrders";

export function useOrders() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");
  const lastName = searchParams.get("last_name");
  const id = searchParams.get("id");
  const page = searchParams.get("page");
  const {
    isLoading,
    data: { ordersCount, orders } = {},
    error,
  } = useQuery({
    queryKey: ["orders", email, lastName, id, page],
    queryFn: () => getOrdersApi(email, lastName, id, page),
  });
  if (error?.message === "Authentication Invalid") {
    navigate("/login");
  }
  return { isLoading, ordersCount, orders };
}
