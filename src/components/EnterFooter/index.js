// Core
import React from "react";
import styled from "styled-components";
// Instruments
import { Trans } from "react-i18next";

const EnterFooter = () => {
  return (
    <Footer>
      <div>
        <span>
          <Trans i18nKey="home.copyright" />
        </span>
      </div>
      <div>
        <span>
          <Trans i18nKey="home.license" />
        </span>
      </div>
      <div>
        <span>
          <Trans i18nKey="home.privacy" />
        </span>
        <span>
          <Trans i18nKey="home.term" />
        </span>
        <span>
          <Trans i18nKey="home.disclaimer" />
        </span>
      </div>
    </Footer>
  );
};

const Footer = styled.div`
  div {
    margin-bottom: 10px;
  }
  span {
    margin-inline-end: 30px;
  }
`;

export default EnterFooter;
