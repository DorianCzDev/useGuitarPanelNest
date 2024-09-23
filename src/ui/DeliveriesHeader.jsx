import styled from "styled-components";

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 200px 90px;
  background-color: var(--accient-bg-color);
  border-top: 1px solid var(--primary-border-color);
  border-left: 1px solid var(--primary-border-color);
  border-right: 1px solid var(--primary-border-color);
  border-bottom: 1px solid var(--primary-border-color);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  margin: 20px auto 0 auto;
  height: 50px;
  width: 900px;
`;

const Span = styled.span`
  height: 50px;
  font-size: 16px;
  padding: 18px 20px 14px 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
function DeliveriesHeader() {
  return (
    <TableHeader>
      <Span>supplier name</Span>
      <Span>cost</Span>
      <Span>estimated time</Span>
    </TableHeader>
  );
}

export default DeliveriesHeader;
