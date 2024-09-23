import { MdDelete, MdEdit } from "react-icons/md";
import styled from "styled-components";
import priceFormater from "../helpers/priceFormater";
import { useDeleteDelivery } from "../services/useDeleteDelivery";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 90px;
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);

  margin: 0 auto;
  height: 50px;
  width: 900px;
`;

const Span = styled.span`
  font-size: 16px;
  padding: 14px 20px;
  letter-spacing: 1px;
`;

const ButtonsContaier = styled.div`
  display: flex;
  gap: 2px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: var(--secondary-bg-color);
  transition: all 0.3s;
  &:hover {
    color: var(--secondary-bg-hover-color);
  }
`;

function DeliveriesRow({ delivery, setIsEditing, setModalIsOpen }) {
  const { supplier, cost, time, id } = delivery;
  const { deleteDeliveryMethod, isPending } = useDeleteDelivery();
  return (
    <Row>
      <Span>{supplier}</Span>
      <Span>{priceFormater(cost)} $</Span>
      <Span>{time} business days</Span>
      <ButtonsContaier>
        <StyledButton
          title="Edit"
          onClick={() => {
            setIsEditing(id);
            setModalIsOpen(true);
          }}
        >
          <MdEdit />
        </StyledButton>

        <StyledButton title="Delete" onClick={() => deleteDeliveryMethod(id)}>
          <MdDelete />
        </StyledButton>
      </ButtonsContaier>
    </Row>
  );
}

export default DeliveriesRow;
