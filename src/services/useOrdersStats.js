import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getOrderStatsApi } from "./apiOrders";

export function useOrdersStats() {
  const navigate = useNavigate();
  const {
    isLoading,
    data: {
      orders,
      ordersNumber,
      allOrdersTotal,
      allOrdersTotalProducts,
      topSellingProducts,
      salesBySubcategory,
      placedOrdersByDate,
    } = {},
    error,
  } = useQuery({
    queryKey: ["ordersStats"],
    queryFn: getOrderStatsApi,
  });
  if (error?.message === "Authentication Invalid") {
    navigate("/login");
  }
  return {
    isLoading,
    orders,
    ordersNumber,
    allOrdersTotal,
    allOrdersTotalProducts,
    topSellingProducts,
    salesBySubcategory,
    placedOrdersByDate,
  };
}
