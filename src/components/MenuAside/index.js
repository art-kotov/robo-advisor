// Core
import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { Trans } from "react-i18next";

//Instruments
import homeIcon from "../../assets/images/home-header.svg";
import advisorLogo from "../../assets/images/rob-advisor-logo.svg";
import homeIconActive from "../../assets/images/home-icon-active.svg";
import walletIconActive from "../../assets/images/wallet-detail-icon-active.svg";
import walletIcon from "../../assets/images/wallet-detail-icon.svg";
import investmentIconActive from "../../assets/images/investment-icon-active.svg";
import investmentIcon from "../../assets/images/investment-icon.svg";
import operationsIconActive from "../../assets/images/portfolio-operations-icon-active.svg";
import operationsIcon from "../../assets/images/portfolio-operations-icon.svg";
import configurationIcon from "../../assets/images/configuration-icon.svg";
import exitIcon from "../../assets/images/exit-icon.svg";

//Components

const MenuAside = () => {
  let location = useLocation();
  const activeClass = {
    backgroundColor: "var(--с-gray-light-opacity)",
    borderInlineStart: "5px solid var(--с-gray-light)",
  };
  return (
    <WrapperMenu>
      <LogoAside>
        <img src={advisorLogo} alt="Advisor" />
      </LogoAside>
      <NavigatioAside>
        <StyledUl>
          <StyledLi>
            <StyledNavLink exact to="/" activeStyle={activeClass}>
              {location.pathname === "/" ? (
                <StyledImg src={homeIconActive} alt="Home Active" />
              ) : (
                <StyledImg src={homeIcon} alt="Home" />
              )}
              <TextMenuItem>
                <Trans i18nKey="home.home" />
              </TextMenuItem>
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink exact to="/2" activeStyle={activeClass}>
              {location.pathname === "/2" ? (
                <StyledImg src={walletIconActive} alt="Wallet Active" />
              ) : (
                <StyledImg src={walletIcon} alt="Wallet" />
              )}
              <TextMenuItem>
                <Trans i18nKey="home.portfolioDetails" />
              </TextMenuItem>
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink exact to="/3" activeStyle={activeClass}>
              {location.pathname === "/3" ? (
                <StyledImg src={investmentIconActive} alt="Investment Active" />
              ) : (
                <StyledImg src={investmentIcon} alt="Investment" />
              )}
              <TextMenuItem>
                <Trans i18nKey="home.performance" />
              </TextMenuItem>
            </StyledNavLink>
          </StyledLi>{" "}
          <StyledLi>
            <StyledNavLink exact to="/4" activeStyle={activeClass}>
              {location.pathname === "/4" ? (
                <StyledImg src={operationsIconActive} alt="Operations Active" />
              ) : (
                <StyledImg src={operationsIcon} alt="Operations" />
              )}
              <TextMenuItem>
                <TextMenuItem>
                  <Trans i18nKey="home.transactions" />
                </TextMenuItem>
              </TextMenuItem>
            </StyledNavLink>
          </StyledLi>
        </StyledUl>
      </NavigatioAside>
      <ConfigurationAside>
        <StyledUl>
          <StyledConfigurationLi>
            <StyledNavLink exact to="/5" activeStyle={activeClass}>
              <StyledImg src={configurationIcon} alt="Configuration" />
              <TextMenuItem>
                <Trans i18nKey="home.settings" />
              </TextMenuItem>
            </StyledNavLink>
          </StyledConfigurationLi>
          <StyledConfigurationLi>
            <StyledNavLink exact to="/6" activeStyle={activeClass}>
              <StyledImg src={exitIcon} alt="Exit" />
              <TextMenuItem>
                <Trans i18nKey="home.logout" />
              </TextMenuItem>
            </StyledNavLink>
          </StyledConfigurationLi>
        </StyledUl>
      </ConfigurationAside>
    </WrapperMenu>
  );
};

export default MenuAside;

const WrapperMenu = styled.aside`
  grid-area: aside;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 124px;
  background-color: var(--с-gray-dark);
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  color: white;
`;

const NavigatioAside = styled.div`
  box-sizing: border-box;
  border-block-end: 2px solid var(--с-gray-light-opacity);
  border-block-start: 2px solid var(--с-gray-light-opacity);
  padding-block-start: 30px;
  padding-block-end: 30px;
`;

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledLi = styled.li`
  margin-block-end: 12px;
`;
const StyledConfigurationLi = styled.li`
  margin-block-end: 2px;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-inline-start: 25px;
  padding-inline-end: 25px;
  padding-block-start: 5px;
  padding-block-end: 5px;
  color: var(--с-white);
  border-inline-start: 5px solid var(--с-gray-dark);
`;

const TextMenuItem = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const StyledImg = styled.img`
  margin-inline-end: 20px;
`;

const LogoAside = styled.div`
  padding-inline-start: 30px;
  padding-inline-end: 30px;
  padding-block-start: 20px;
  padding-block-end: 20px;
`;

const ConfigurationAside = styled.div`
  padding-block-start: 30px;
`;
