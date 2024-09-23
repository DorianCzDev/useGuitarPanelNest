import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const H1 = styled.h1`
  letter-spacing: 5px;
`;

function NotFound() {
  return (
    <Wrapper>
      <H1>No results was found</H1>
    </Wrapper>
  );
}

export default NotFound;
