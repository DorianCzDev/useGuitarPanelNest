import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductImageApi } from "./apiProductImages";
import toast from "react-hot-toast";

export function useDeleteProductImage() {
  const queryClient = useQueryClient();

  const { mutate: deleteProductImage, isPending } = useMutation({
    mutationFn: deleteProductImageApi,
    onMutate: () => {
      toast.loading("Deleting...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["product"],
      });

      toast.dismiss();
      toast.success("Product image successfully deleted");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { deleteProductImage, isPending };
}
