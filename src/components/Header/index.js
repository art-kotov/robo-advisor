// Core

import React from "react";
import styled from "styled-components";

//Instruments
import homeIcon from "../../assets/images/home-header.svg";
import bellIcon from "../../assets/images/bell-icon.svg";

//Components
import BaseButton from "../base/BaseButton";

const Header = () => {
  return (
    <WrapperHeader>
      <HeaderStart>
        <img src={homeIcon} alt="Home" />
        <LocationText>الرئيسية</LocationText>
      </HeaderStart>
      <HeaderEnd>
        <StyledImg src={bellIcon} alt="Bell" />
        <BaseButton withShadow minWidth="116px">
          ايداع
        </BaseButton>
      </HeaderEnd>
    </WrapperHeader>
  );
};

export default Header;

const WrapperHeader = styled.header`
  background-color: var(-—c-white);
  grid-area: header;
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  padding-block-start: 20px;
  padding-block-end: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderStart = styled.div`
  display: flex;
  align-items: center;
`;
const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
`;

const LocationText = styled.span`
  padding-inline-start: 30px;
  font-size: 24px;
  font-weight: 600;
`;

const StyledImg = styled.img`
  margin-inline-end: 30px;
`;
