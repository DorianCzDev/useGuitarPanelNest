import { createContext } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 100%;
  flex-wrap: wrap;
  cursor: pointer;
`;

const StyledH1 = styled.h1`
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 400;
  /* padding: 8px; */
`;

const StyledIcon = styled.span`
  font-size: 32px;
  cursor: pointer;
`;

const StyledContent = styled.div`
  padding: 0 20px;
  font-size: 16px;
  flex-basis: 100%;
  margin-top: 10px;
  ${(props) =>
    props.variation === "secondaryFilter" &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border: 1px solid #ddd;
      border-radius: 20px;

      /* justify-content: center; */
      /* flex-direction: column; */
    `}
`;

const AccordionContext = createContext();

function Accordion({ children }) {
  return (
    <AccordionContext.Provider value="value">
      {children}
    </AccordionContext.Provider>
  );
}

function Wrapper({ children, onClick }) {
  return <StyledWrapper onClick={onClick}>{children}</StyledWrapper>;
}

function H1({ children }) {
  return <StyledH1>{children}</StyledH1>;
}

function Icon({ children, onClick }) {
  return <StyledIcon onClick={onClick}>{children}</StyledIcon>;
}

function Content({ children, variation }) {
  return <StyledContent variation={variation}>{children}</StyledContent>;
}

Accordion.Wrapper = Wrapper;
Accordion.Icon = Icon;
Accordion.H1 = H1;
Accordion.Content = Content;

export default Accordion;
