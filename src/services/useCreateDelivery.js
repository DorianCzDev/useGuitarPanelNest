import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createDeliveryMethodApi } from "./apiDeliveries";

export function useCreateDelivery() {
  const queryClient = useQueryClient();

  const { mutate: createDeliveryMethod, isPending: isPendingCreate } =
    useMutation({
      mutationFn: createDeliveryMethodApi,
      onMutate: () => {
        toast.loading("Creating...");
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["deliveries"] });
        toast.dismiss();
        toast.success("Delivery method successfully added");
      },
      onError: (err) => {
        toast.dismiss();
        toast.error(err.message);
      },
    });
  return { createDeliveryMethod, isPendingCreate };
}
