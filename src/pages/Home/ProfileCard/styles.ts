import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 2.5rem;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme["base-profile"]};
  width: 100%;

  img {
    max-height: 148px;
    max-width: 148px;
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
`;
export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: flex-end;
  span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const Social = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .icon {
      color: ${(props) => props.theme["base-label"]};
    }
  }
`;
