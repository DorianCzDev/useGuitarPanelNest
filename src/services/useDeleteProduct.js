import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductApi } from "./apiProducts";
import toast from "react-hot-toast";

export function useDeleteProduct() {
  const queryClient = useQueryClient();

  const { mutate: deleteProduct, isPending } = useMutation({
    mutationFn: deleteProductApi,
    onMutate: () => {
      toast.loading("Deleting...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.dismiss();
      toast.success("Product successfully deleted");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { deleteProduct, isPending };
}
