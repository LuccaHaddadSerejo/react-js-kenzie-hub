import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRegisterMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > :nth-child(1) {
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 472px;
    height: 80px;
  }

  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray0);
  border-radius: var(--radius3);
  background-color: var(--color-gray300);
  border: 1px solid var(--color-gray300);
  width: 80px;
  height: 32px;
  font-weight: var(--weight2);
  font-size: var(--font-size8);
  cursor: pointer;

  &:hover {
    background-color: var(--color-gray200);
    border-color: var(--color-gray200);
  }
`;
