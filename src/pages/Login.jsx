import { useState } from "react";
import styled from "styled-components";
import { useLogin } from "../services/useLogin";
import SpinnerMini from "../ui/SpinnerMini";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  min-height: 100dvh;
  background-color: var(--primary-bg-color);
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
`;

const Form = styled.form`
  padding: 24px 40px;
  width: 500px;
  background-color: var(--secondary-accient-bg-color);
  border-radius: 12px;
  border: 1px solid var(--secondary-border-color);
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 12px;
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  border: 1px solid var(--secondary-border-color);
  color: #fff;
  &:focus {
    border: 1px solid #555;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: #065ec0;
  font-size: 20px;
  padding: 16px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 2px;
  min-height: 64px;
  margin-top: 24px;
  &:hover {
    background-color: #0654ab;
  }
`;

const Img = styled.img`
  object-fit: cover;
  aspect-ratio: 4/3;
  width: 400px;
`;

function Login() {
  const [email, setEmail] = useState(import.meta.env.VITE_EMAIL);
  const [password, setPassword] = useState(import.meta.env.VITE_PASSWORD);

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    login({ email, password });
  }
  return (
    <Wrapper>
      <div>
        <Img src="https://res.cloudinary.com/dlartwnnr/image/upload/v1715989024/logo-white-no-background_yb7i1k.svg" />
      </div>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            disabled={isPending}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="password"
            value={password}
            disabled={isPending}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <Button disabled={isPending} type="submit">
            {isPending ? <SpinnerMini /> : "Login"}
          </Button>
        </FormRow>
      </Form>
    </Wrapper>
  );
}

export default Login;
