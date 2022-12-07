import styled from "styled-components";

export const StyledLoginMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 85px;
    margin-bottom: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    align-items: center;
    justify-content: center;
  }
`;
