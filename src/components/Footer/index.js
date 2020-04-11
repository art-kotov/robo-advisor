// Core
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { MobXProviderContext, observer } from "mobx-react";
import { Trans } from "react-i18next";
//Instruments

//Components

const Footer = () => {
  const { uiStore } = useContext(MobXProviderContext);

  //to update component to see the translation
  const dir = uiStore.direction;
  const dunpFunction = () => {
    if (dir) {
      return;
    } else {
      return;
    }
  };
  useEffect(() => {
    dunpFunction();
  });
  // the end

  return (
    <WrapperFooter>
      <FooterItemText>
        <Trans i18nKey="home.privacy" />
      </FooterItemText>
      <FooterItemText>
        <Trans i18nKey="home.term" />
      </FooterItemText>
      <FooterItemText>
        <Trans i18nKey="home.disclaimer" />
      </FooterItemText>
      <FooterItemText>
        <Trans i18nKey="home.license" />
      </FooterItemText>
      <FooterItemText>
        <Trans i18nKey="home.copyright" />
      </FooterItemText>
    </WrapperFooter>
  );
};

export default observer(Footer);

const WrapperFooter = styled.footer`
  grid-area: footer;
  padding-inline-start: 25px;
  padding-inline-end: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: var(--с-gray-light);
`;

const FooterItemText = styled.span`
  padding-inline-start: 5px;
  padding-inline-end: 5px;
  font-size: 14px;
  line-height: 21px;
  color: var(--с-gray-dark);
`;
