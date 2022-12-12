import styled from "styled-components";

export const StyledTechCard = styled.button`
  width: 100%;
  min-height: 49px;
  padding: 0 10px;
  background-color: var(--color-gray400);
  border: transparent;
  border-radius: var(--radius3);
  &:hover {
    background-color: var(--color-gray200);

    span {
      color: var(--color-gray0);
    }
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    color: var(--color-gray0);
    font-weight: var(--weigth1);
    font-size: var(--font-size6);
  }

  span {
    color: var(--color-gray100);
    font-weight: var(--weigth4);
    font-size: var(--font-size7);
  }
`;
