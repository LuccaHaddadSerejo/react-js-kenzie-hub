import styled from "styled-components";

export const StyledModalWrapper = styled.div`
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
    background-color: var(--color-gray300);
    border: transparent;
    border-radius: var(--radius3);
  }
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    display: flex;
    flex-direction: row;
    padding: 16px 15px;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: var(--color-gray200);
    border: transparent;
    border-radius: 4px 4px 0 0;

    h2 {
      font-weight: var(--weight1);
      font-size: var(--font-size7);
      color: var(--color-gray0);
    }

    button {
      border: none;
      background-color: transparent;
      font-weight: var(--weight2);
      font-size: var(--font-size7);
      color: var(--color-gray100);

      &:hover {
        filter: brightness(1.2);
      }
    }
  }
`;
