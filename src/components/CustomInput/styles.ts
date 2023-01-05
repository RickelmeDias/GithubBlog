import styled from "styled-components";

export const CustomInput = styled.input`
  width: 100%;
  height: 3.125rem;
  border: none;
  background-color: ${(props) => props.theme["base-input"]};
  box-shadow: inset 0 0 0 1px ${(props) => props.theme["base-border"]};
  color: ${(props) => props.theme["base-text"]};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:active {
    box-shadow: inset 0 0 0 1px ${(props) => props.theme.blue};
  }
`;
