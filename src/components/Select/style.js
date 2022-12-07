import styled from "styled-components";

export const StyledSelect = styled.select`
  height: 38.5px;
  background-color: var(--color-gray200);
  border: 1px solid var(--color-gray300);
  border-radius: var(--radius3);
  padding-left: 15px;
  color: var(--color-gray0);
  &::placeholder {
    color: var(--color-gray100);
  }
  &:focus,
  :active {
    color: var(--color-gray0);
    border-color: var(--color-gray0);
  }
`;
