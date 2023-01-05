import styled from "styled-components";
import { Link } from "react-router-dom";

interface LinkContainerProps {
  size?: number;
}

export const LinkContainer = styled(Link)<LinkContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size + "rem" : 0.75 + "rem")};
  font-weight: bold;
  color: ${(props) => props.theme.blue};
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    box-shadow: inset 0 -2px 1px -1px ${(props) => props.theme.blue};
  }
`;

export const OutsideLinkContainer = styled.a<LinkContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.size ? props.size + "rem" : 0.75 + "rem")};
  font-weight: bold;
  color: ${(props) => props.theme.blue};
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    box-shadow: inset 0 -2px 1px -1px ${(props) => props.theme.blue};
  }
`;
