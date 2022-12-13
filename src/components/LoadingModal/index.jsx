import React from "react";
import loadingAnimation from "../../assets/imgs/Spinner-1s-204px.svg";
import { StyledImg, StyledLoadingModalWrapper } from "./style";

const LoadingModal = () => {
  return (
    <StyledLoadingModalWrapper>
      <div>
        <StyledImg src={loadingAnimation} alt="" />
      </div>
    </StyledLoadingModalWrapper>
  );
};

export default LoadingModal;
