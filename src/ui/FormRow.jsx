import styled from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 250px;
  gap: 4px;
  padding: 8px;
  border-top: 1px solid var(--primary-bg-hover-color);
`;

function FormRow({ children }) {
  return <StyledFormRow>{children}</StyledFormRow>;
}

export default FormRow;
