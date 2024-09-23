import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductApi } from "./apiProducts";
import toast from "react-hot-toast";

export function useUpdateProduct() {
  const queryClient = useQueryClient();

  const { mutate: updateProduct, isPending } = useMutation({
    mutationFn: updateProductApi,
    onMutate: () => {
      toast.loading("updating...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.dismiss();
      toast.success("Product successfully updated");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { isPending, updateProduct };
}
