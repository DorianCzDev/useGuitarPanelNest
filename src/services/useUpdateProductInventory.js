import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProductInvenotryApi } from "./apiProducts";
import toast from "react-hot-toast";

export function useUpdateProductInventory() {
  const queryClient = useQueryClient();

  const { mutate: updateProductInventory, isPending } = useMutation({
    mutationFn: changeProductInvenotryApi,
    onMutate: () => {
      toast.loading("updating...");
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["products"],
      });
      toast.dismiss();
      toast.success("Inventory successfully updated");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { isPending, updateProductInventory };
}
