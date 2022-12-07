/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: var(--radius3);
  transition: 0.4s;

  ${({ buttonType }) => {
    switch (buttonType) {
      case "login/register":
        return css`
          width: 100%;
          background-color: var(--color-primary);
          height: 38.5px;
          border: 1px solid var(--color-primary);
          font-weight: var(--weight3);
          font-size: var(--font-size7);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-secondary);
          }
        `;
      case "logout":
        return css`
          width: 68px;
          background-color: var(--color-gray300);
          height: 38.5px;
          border: 1px solid var(--color-gray300);
          font-weight: var(--weight2);
          font-size: var(--font-size7);
          color: var(--color-gray0);

          &:hover {
            background-color: var(--color-gray200);
          }
        `;
    }
  }}
`;
