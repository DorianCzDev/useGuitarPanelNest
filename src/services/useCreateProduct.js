import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProductApi } from "./apiProducts";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const queryClient = useQueryClient();

  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: createProductApi,
    onMutate: () => {
      toast.loading("Creating...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.dismiss();
      toast.success("Product successfully added");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { createProduct, isPending };
}
