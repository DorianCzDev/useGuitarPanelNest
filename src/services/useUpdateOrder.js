import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateOrderApi } from "./apiOrders";

export function useUpdateOrder() {
  const queryClient = useQueryClient();

  const { mutate: updateOrder, isPending } = useMutation({
    mutationFn: updateOrderApi,
    onMutate: () => {
      toast.loading("updating...");
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["order"],
      });
      queryClient.refetchQueries({
        queryKey: ["orders"],
      });
      toast.dismiss();
      toast.success("Order successfully updated");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { isPending, updateOrder };
}
