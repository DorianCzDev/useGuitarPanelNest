import styled from "styled-components";

const StatWrapper = styled.div`
  background-color: var(--accient-bg-color);
  border: 1px solid var(--secondary-border-color);
  border-radius: 12px;
  padding: 16px;
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-rows: auto auto;
  column-gap: 16px;
  row-gap: 4px;
  width: 270px;
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(prop) => (prop.color ? prop.color : "#000")};

  & svg {
    width: 32px;
    height: 32px;
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 400;
  color: var(--secondary-bg-color);
`;

const Value = styled.p`
  color: var(--primary-font-color);
  font-size: 24px;
  font-weight: 500;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StatWrapper>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StatWrapper>
  );
}

export default Stat;
