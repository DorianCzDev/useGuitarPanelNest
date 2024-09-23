import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "./apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      navigate("/login");
      queryClient.removeQueries(["user"]);
    },
    onError: (err) => {
      console.error(err.message);
    },
  });
  return { logout, isPending };
}
