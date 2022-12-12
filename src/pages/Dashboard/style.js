import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid var(--color-gray200);
`;

export const StyledNav = styled.nav`
  max-width: 1400px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMain = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :nth-child(1) {
    max-width: 1400px;
    padding: 15px;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid var(--color-gray200);

    h2 {
      color: var(--color-gray0);
      font-weight: var(--weigth1);
      font-size: var(--font-size4);
      margin-bottom: 10px;
    }

    p {
      color: var(--color-gray100);
      font-weight: var(--weigth4);
      font-size: var(--font-size7);
    }

    @media (min-width: 700px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    width: 100%;
    padding: 15px;
    gap: 21px;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        color: var(--color-gray0);
        font-weight: var(--weigth2);
        font-size: var(--font-size5);
      }

      button {
        width: 32px;
        min-height: 32px;
        background-color: var(--color-gray300);
        color: var(--color-gray0);
        border: transparent;
        border-radius: var(--radius3);

        &:hover {
          background-color: var(--color-gray200);
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      max-width: 1400px;
      padding: 22px 8.5px;
      gap: 16px;
      width: 100%;
      border: transparent;
      border-radius: var(--radius3);
      background-color: var(--color-gray300);
    }
  }
`;
