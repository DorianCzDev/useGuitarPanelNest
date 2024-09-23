import styled from "styled-components";

export const Input = styled.input`
  font-size: 18px;
  padding: 4px 8px;
  border-radius: 6px;
  outline: none;
  border: 1px solid var(--primary-border-color);
  background-color: transparent;
  color: #e5e5e5;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
