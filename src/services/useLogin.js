import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "./apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: (user) => loginUser(user),
    onSuccess: (user) => {
      console.log(user);
      queryClient.setQueryData(["user"], user);
      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.error(err.message);
    },
  });
  return { login, isPending };
}
