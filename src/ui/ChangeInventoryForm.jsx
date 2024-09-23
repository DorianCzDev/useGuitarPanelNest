import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";
import { useUpdateProductInventory } from "../services/useUpdateProductInventory";

const FormInput = styled.input`
  font-size: 18px;
  padding: 10px 12px;
  margin-top: 8px;
  border-radius: 6px;
  font-weight: 300;
  width: 70px;
  letter-spacing: 1px;
  border: 1px solid var(--primary-border-color);
  background-color: transparent;
  outline: none;
  color: var(--primary-font-color);
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

function ChangeInventoryForm({ setModalIsOpen, isEditing }) {
  const [inventory, setInventory] = useState(0);
  const { updateProductInventory, isPending } = useUpdateProductInventory();

  function handleClick(operation) {
    updateProductInventory({ isEditing, inventory, operation });
    setModalIsOpen(false);
  }

  return (
    <Wrapper>
      <FormInput
        type="number"
        onChange={(e) => setInventory(e.target.value)}
        placeholder="amount"
      />
      <ButtonWrapper>
        <Button onClick={() => handleClick("remove")}>
          remove from inventory
        </Button>
        <Button onClick={() => handleClick("add")}>add to inventory</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}

export default ChangeInventoryForm;
