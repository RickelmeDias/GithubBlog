import styled from "styled-components";

export const CustomCardContainer = styled.button`
  background-color: ${(props) => props.theme["base-post"]};
  border: none;
  padding: 2rem;
  width: 416px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 260px;
  border-radius: 10px;
  text-align: left;

  &:hover {
    box-shadow: inset 0 0 0 2px ${(props) => props.theme["base-label"]};
    cursor: pointer;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  h1 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    max-width: 80%;
  }

  span {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const About = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  flex: 1;
`;
