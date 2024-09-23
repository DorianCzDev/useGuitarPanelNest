import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateDeliveryMethodApi } from "./apiDeliveries";

export function useUpdateDelivery() {
  const queryClient = useQueryClient();

  const { mutate: updateDeliveryMethod, isPending: isPendingUpdate } =
    useMutation({
      mutationFn: updateDeliveryMethodApi,
      onMutate: () => {
        toast.loading("updating...");
      },
      onSuccess: () => {
        queryClient.refetchQueries({
          queryKey: ["deliveries"],
        });
        toast.dismiss();
        toast.success("Delivery successfully updated");
      },
      onError: (err) => {
        toast.dismiss();
        toast.error(err.message);
      },
    });
  return { isPendingUpdate, updateDeliveryMethod };
}
