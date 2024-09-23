import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  flex-basis: 180px;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  padding: 0 8px;
  margin: 26px auto;
  object-fit: cover;
  width: 260px;
  aspect-ratio: 4/2;
`;

function Logo() {
  return (
    <Wrapper>
      <Link to="/">
        <StyledImage src="https://res.cloudinary.com/dlartwnnr/image/upload/v1715989024/logo-white-no-background_yb7i1k.svg" />
      </Link>
    </Wrapper>
  );
}

export default Logo;
