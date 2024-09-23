import styled from "styled-components";

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 240px 180px 180px 165px 140px 230px;
  background-color: var(--accient-bg-color);
  border-top: 1px solid var(--primary-border-color);
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  height: 50px;
  width: 1150px;
`;

const Span = styled.span`
  height: 50px;
  font-size: 16px;
  padding: 18px 20px 14px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const NonEmailSpan = styled(Span)`
  text-align: center;
`;

function OrdersHeader() {
  return (
    <TableHeader>
      <Span>E-mail</Span>
      <NonEmailSpan>First Name</NonEmailSpan>
      <NonEmailSpan>Last Name</NonEmailSpan>
      <NonEmailSpan>Total Price</NonEmailSpan>
      <NonEmailSpan>Ordered</NonEmailSpan>
      <NonEmailSpan>Status</NonEmailSpan>
    </TableHeader>
  );
}

export default OrdersHeader;
