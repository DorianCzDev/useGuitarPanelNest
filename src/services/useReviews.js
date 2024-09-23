import { useQuery } from "@tanstack/react-query";
import { getReportedReviewsApi } from "./apiReviews";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useReviews() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get("page");
  const {
    isLoading,
    data: { reviewsCount, reviews } = {},
    error,
  } = useQuery({
    queryKey: ["reviews", page],
    queryFn: () => getReportedReviewsApi(page),
  });
  if (error?.message === "Authentication Invalid") {
    navigate("/login");
  }
  return { isLoading, reviews, reviewsCount };
}
