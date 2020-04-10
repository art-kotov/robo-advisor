// Core
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

//Instruments
import advisorLogo from "../../assets/images/rob-advisor-logo.svg";
import homeIcon from "../../assets/images/home-icon.svg";
import homeIconActive from "../../assets/images/home-icon-active.svg";
import walletIcon from "../../assets/images/wallet-detail-icon.svg";
import walletIconActive from "../../assets/images/wallet-detail-icon-active.svg";
import investmentIcon from "../../assets/images/investment-icon.svg";
import investmentIconActive from "../../assets/images/investment-icon-active.svg";
import operationsIcon from "../../assets/images/portfolio-operations-icon.svg";
import operationsIconActive from "../../assets/images/portfolio-operations-icon-active.svg";

//Components
import Header from "../../components/Header";

const TemplateBase = ({ children }) => {
  let location = useLocation();
  const activeClass = {
    backgroundColor: "var(--с-gray-light-opacity)",
    borderInlineStart: "5px solid var(--с-gray-light)",
  };
  return (
    <Wrapper>
      <Header />
      <Aside>
        <LogoAside>
          <img src={advisorLogo} alt="Advisor" />
        </LogoAside>
        <MenuAside>
          <StyledUl>
            <li>
              <StyledNavLink exact to="/" activeStyle={activeClass}>
                {location.pathname === "/" ? (
                  <StyledImg src={homeIconActive} alt="Home Active" />
                ) : (
                  <StyledImg src={homeIcon} alt="Home" />
                )}
                <TextMenuItem>الرئيسية</TextMenuItem>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink exact to="/2" activeStyle={activeClass}>
                {location.pathname === "/2" ? (
                  <StyledImg src={walletIconActive} alt="Wallet Active" />
                ) : (
                  <StyledImg src={walletIcon} alt="Wallet" />
                )}
                <TextMenuItem>تفاصيل المحفظة</TextMenuItem>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink exact to="/3" activeStyle={activeClass}>
                {location.pathname === "/3" ? (
                  <StyledImg
                    src={investmentIconActive}
                    alt="Investment Active"
                  />
                ) : (
                  <StyledImg src={investmentIcon} alt="Investment" />
                )}
                <TextMenuItem>اداء الاستثمار</TextMenuItem>
              </StyledNavLink>
            </li>{" "}
            <li>
              <StyledNavLink exact to="/4" activeStyle={activeClass}>
                {location.pathname === "/4" ? (
                  <StyledImg
                    src={operationsIconActive}
                    alt="Operations Active"
                  />
                ) : (
                  <StyledImg src={operationsIcon} alt="Operations" />
                )}
                <TextMenuItem>عمليات المحفظة</TextMenuItem>
              </StyledNavLink>
            </li>
          </StyledUl>
        </MenuAside>
        <ConfigurationAside>turn off</ConfigurationAside>
      </Aside>
      <Main>{children}</Main>
      <Footer>footer</Footer>
    </Wrapper>
  );
};

export default TemplateBase;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 234px 1fr;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    "aside header"
    "aside main"
    "aside footer";
`;

//main

const Main = styled.main`
  background-color: var(--с-gray-light);
  grid-area: main;
`;

//aside

const Aside = styled.aside`
  grid-area: aside;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 124px;
  background-color: var(--с-gray-dark);
  box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.25);
  color: white;
`;

const MenuAside = styled.div`
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
  li {
    margin-block-end: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-inline-start: 25px;
  padding-inline-end: 25px;
  padding-block-start: 6px;
  padding-block-end: 6px;
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

const ConfigurationAside = styled.div``;

//footer
const Footer = styled.footer`
  background-color: black;
  grid-area: footer;
`;
