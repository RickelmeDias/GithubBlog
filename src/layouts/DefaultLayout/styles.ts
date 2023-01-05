import styled from "styled-components";

export const LayoutContainer = styled.div`
  main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
  }
  img#coverBackground {
    position: absolute;
    height: 296px;
    object-fit: cover;
    width: 100%;
    z-index: -1;
  }
`;

export const LogoHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    margin-top: 4rem;
    margin-bottom: 2.875rem;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    max-width: 148px;
  }
`;
