import styled from "styled-components";

export const SingleOrderTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px 120px 180px;
  border: 1px solid var(--secondary-border-color);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 60px;
  width: 100%;
`;

export const SingleOrderTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px 120px 180px;
  border-bottom: 1px solid var(--secondary-border-color);
  border-left: 1px solid var(--secondary-border-color);
  border-right: 1px solid var(--secondary-border-color);
  background: var(--accient-bg-color);
  min-height: 70px;
  width: 100%;
`;

export const SingleOrderTableFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  height: 60px;
  border-bottom: 1px solid var(--secondary-border-color);
  border-left: 1px solid var(--secondary-border-color);
  border-right: 1px solid var(--secondary-border-color);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100%;
`;
export const SingleOrderTableNumberSpan = styled.span`
  margin: auto 0;
  font-weight: 300;
  font-size: 18px;
  padding-left: 40px;
`;

export const SingleOrderTableSpan = styled.span`
  margin: auto 0;
  padding: 0 24px;
  font-weight: 300;
  font-size: 18px;
`;
