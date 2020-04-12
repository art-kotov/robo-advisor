// Core
import React, { useContext } from "react";
import styled from "styled-components";
import { Trans } from "react-i18next";

//Instruments
import detailsIcon from "../../assets/images/details-icon.svg";
import investmentIcon from "../../assets/images/investment-icon.svg";
import incomeIcon from "../../assets/images/income-icon.svg";
import walletIcon from "../../assets/images/wallet-detail-icon.svg";
import { MobXProviderContext, observer } from "mobx-react";

//Components

const Card = ({ item }) => {
  const { uiStore } = useContext(MobXProviderContext);
  const chooseIcon = (heading) => {
    switch (heading) {
      case "risk": {
        return <img src={investmentIcon} alt="Investment" />;
      }
      case "returns": {
        return <img src={incomeIcon} alt="Income" />;
      }
      case "portfolioValue": {
        return <img src={walletIcon} alt="Wallet" />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <CardWrapper direction={uiStore.direction}>
      <CardHeading>
        <HeadingText>
          <Trans i18nKey={`home.${item.heading}`} />
        </HeadingText>
        {chooseIcon(item.heading)}
      </CardHeading>
      <CardContent>
        {item.data && <DataText>{item.data}</DataText>}
        {item.currency && (
          <LevelText>
            <Trans i18nKey={`home.${item.currency}`} />
          </LevelText>
        )}
        {item.risk_level && (
          <DataText>
            {" "}
            <Trans i18nKey={`home.${item.risk_level}`} />
          </DataText>
        )}
      </CardContent>
      <Cardfooter>
        {item.details && (
          <>
            <StyledImg src={detailsIcon} alt="Details" />
            <DeatilsText>
              <Trans i18nKey={`home.${item.details}`} />
            </DeatilsText>
          </>
        )}
      </Cardfooter>
    </CardWrapper>
  );
};

export default observer(Card);

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
  padding-inline-start: 15px;
  padding-inline-end: 15px;
  padding-block-start: 15px;
  padding-block-end: 15px;
  background-color: var(--c-white);
  box-shadow: ${(props) =>
    props.direction === "rtl"
      ? "1px 1px 1px rgba(0, 0, 0, 0.15)"
      : "-1px 1px 1px rgba(0, 0, 0, 0.15)"};
`;

const CardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeadingText = styled.span`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: var(--с-gray-dark);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DataText = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif !important;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 49px;
`;
const LevelText = styled.div`
  font-size: 30px;
  line-height: 45px;
`;

const Cardfooter = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  margin-inline-end: 9px;
`;

const DeatilsText = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: var(--c-blue);
`;
