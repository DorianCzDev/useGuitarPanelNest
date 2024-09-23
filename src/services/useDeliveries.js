import { useQuery } from "@tanstack/react-query";
import { getDeliveryMethodsApi } from "./apiDeliveries";
import { useNavigate } from "react-router-dom";

export function useDeliveries() {
  const navigate = useNavigate();
  const {
    isLoading,
    data: deliveries,
    error,
  } = useQuery({
    queryKey: ["deliveries"],
    queryFn: getDeliveryMethodsApi,
  });
  if (error?.message === "Authentication Invalid") {
    navigate("/login");
  }
  return { isLoading, deliveries };
}
