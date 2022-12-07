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
  border-bottom: 1px solid var(--color-gray200);

  & > :nth-child(1) {
    max-width: 1400px;
    padding: 15px;
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

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
`;
