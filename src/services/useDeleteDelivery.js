import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteDeliveryMethodApi } from "./apiDeliveries";

export function useDeleteDelivery() {
  const queryClient = useQueryClient();

  const { mutate: deleteDeliveryMethod, isPending } = useMutation({
    mutationFn: deleteDeliveryMethodApi,
    onMutate: () => {
      toast.loading("Deleting...");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["deliveries"] });
      toast.dismiss();
      toast.success("Delivery method successfully deleted");
    },
    onError: (err) => {
      toast.dismiss();
      toast.error(err.message);
    },
  });
  return { deleteDeliveryMethod, isPending };
}
