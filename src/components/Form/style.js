import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  ${({ padding }) => {
    if (padding === "login/register") {
      return css`
        padding: 34px 18px;
      `;
    } else if (padding === "modal") {
      return css`
        padding: 15px 18px;
      `;
    }
  }}

  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: var(--color-gray300);
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: var(--radius3);

  h2 {
    text-align: center;
    color: var(--color-gray0);
    font-weight: var(--weigth1);
    font-size: var(--font-size6);
  }

  p {
    text-align: center;
    color: var(--color-gray100);
    font-weight: var(--weigth2);
    font-size: var(--font-size8);
    margin-bottom: 18px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius3);
  background-color: var(--color-gray100);
  border: 1px solid var(--color-gray100);
  width: 100%;
  height: 38.5px;
  font-weight: var(--weight3);
  font-size: var(--font-size7);
  color: var(--color-gray0);
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;
