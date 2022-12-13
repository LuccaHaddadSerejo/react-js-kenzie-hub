import styled from "styled-components";

export const StyledLoadingModalWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(18, 18, 20, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 30px;
  padding: 0 15px;

  & > div {
    width: 100%;
    max-width: 500px;
    min-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: transparent;
    border-radius: var(--radius3);
  }
`;

export const StyledImg = styled.img``;
