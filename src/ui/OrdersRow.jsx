import styled from "styled-components";

import priceFormater from "../helpers/priceFormater";

const Row = styled.div`
  display: grid;
  grid-template-columns: 240px 180px 180px 165px 140px 230px;
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  background-color: var(--primary-bg-color);

  height: 50px;
  width: 1150px;

  &:hover {
    background-color: var(--primary-bg-hover-color);
    cursor: pointer;
  }
`;

const Span = styled.span`
  font-size: 16px;
  padding: 18px 20px 14px 20px;
  letter-spacing: 1px;
`;

const NonEmailSpan = styled(Span)`
  text-align: center;
`;

function OrdersRow({ order, setIsOpen, setIsEditing }) {
  const {
    email,
    first_name: firstName,
    last_name: lastName,
    total,
    status,
    id,
    created_at,
  } = order;

  return (
    <Row
      onClick={() => {
        setIsOpen("singleOrder");
        setIsEditing(id);
      }}
    >
      <Span>{email}</Span>
      <NonEmailSpan>{firstName}</NonEmailSpan>
      <NonEmailSpan>{lastName}</NonEmailSpan>
      <NonEmailSpan>{priceFormater(total)} $</NonEmailSpan>
      <NonEmailSpan>{created_at.split("T")[0]}</NonEmailSpan>
      <NonEmailSpan>{status}</NonEmailSpan>
    </Row>
  );
}

export default OrdersRow;
