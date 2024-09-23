import styled from "styled-components";

export const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 18px;

  &::file-selector-button {
    font: inherit;
    background-color: transparent;
    border-radius: 1px;
    cursor: pointer;
    border: 1px solid var(--primary-border-color);
    color: #e5e5e5;
    transition: all 0.3s;
    padding: 8px 12px;
    &:hover {
      background-color: var(--primary-bg-hover-color);
    }
  }
`;
