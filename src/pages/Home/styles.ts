import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const PublicationsInfo = styled.span`
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-span"]};
  }
`;

export const GridPublications = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 250px;
`;
