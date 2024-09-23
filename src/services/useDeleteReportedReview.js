import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteReportedReviewApi } from "./apiReviews";

export function useDeleteReportedReview() {
  const queryClient = useQueryClient();

  const { mutate: deleteReportedReview, isPending } = useMutation({
    mutationFn: deleteReportedReviewApi,
    onMutate: () => {
      toast.loading("Deleting...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });

      toast.dismiss();
      toast.success("Review successfully deleted");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { deleteReportedReview, isPending };
}
