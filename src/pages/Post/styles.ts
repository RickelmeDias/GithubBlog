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

export const PostContent = styled.p`
  padding: 2.5rem;
  align-items: left;
`;
