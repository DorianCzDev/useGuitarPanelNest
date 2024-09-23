import styled, { css } from "styled-components";

const StyledButton = styled.button`
  margin: 20px 0;
  outline: none;
  border: none;
  font-size: 16px;
  padding: 14px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
  ${(props) =>
    props.variation === "regular" &&
    css`
      background-color: #044894;
      color: #fff;
      /* border: 1px solid #000; */
      &:hover {
        background-color: #064080;
      }
    `}

  ${(props) =>
    props.variation === "cancel" &&
    css`
      background-color: transparent;
      color: #fff;
      &:hover {
        background-color: #ddd;
      }
    `}

  ${(props) =>
    props.variation === "submit" &&
    css`
      background-color: #000;
      color: #fff;
      &:hover {
        color: #ddd;
      }
    `}
`;

StyledButton.defaultProps = {
  variation: "regular",
};

function Button({ children, onClick, variation }) {
  return (
    <StyledButton onClick={onClick} variation={variation}>
      {children}
    </StyledButton>
  );
}

export default Button;
