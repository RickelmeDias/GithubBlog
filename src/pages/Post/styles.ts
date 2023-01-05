import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
`;
export const PostInformations = styled.div`
  padding: 2rem;
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  width: 100%;
`;
export const MenuPost = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`;
export const Infos = styled.div`
  margin-top: 0.5rem;
  display: flex;
  color: ${(props) => props.theme["base-label"]};
  gap: 2rem;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  align-items: left;
  font-family: "Nunito", sans-serif;

  pre {
    padding: 1rem;
    background-color: ${(props) => props.theme["base-post"]};
    font-size: 1rem;
    font-weight: 400;
    font-family: "Fira Code", monospace;
    border-radius: 2px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    &:hover {
      box-shadow: inset 0 -2px 1px -1px ${(props) => props.theme.blue};
    }
  }
`;
