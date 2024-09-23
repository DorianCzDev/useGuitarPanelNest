import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteReviewFromReportedApi } from "./apiReviews";

export function useDeleteReviewFromReported() {
  const queryClient = useQueryClient();

  const { mutate: deleteReviewFromReported, isPending } = useMutation({
    mutationFn: deleteReviewFromReportedApi,
    onMutate: () => {
      toast.loading("Updating...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews"],
      });

      toast.dismiss();
      toast.success("Review successfully updated");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { deleteReviewFromReported, isPending };
}
