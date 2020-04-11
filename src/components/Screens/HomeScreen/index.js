// Core
import React, { useContext } from "react";
import styled from "styled-components";
import { MobXProviderContext } from "mobx-react";

//Instruments

//Components
import Card from "../../Card";

//Mock data
const arr = [
  {
    heading: "portfolioValue",
    data: "365,654",
    currency: "currency",
    details: "details",
    risk_level: "",
  },
  {
    heading: "returns",
    data: "365,654",
    currency: "currency",
    details: "details",
    risk_level: "",
  },
  {
    heading: "risk",
    data: "",
    currency: "",
    details: "",
    risk_level: "riskLevel",
  },
];

const HomeScreen = () => {
  const { uiStore } = useContext(MobXProviderContext);
  return (
    <WrapperHomeScreen>
      {arr.map((item, idx) => (
        <Card key={idx} direction={uiStore.direction} item={item} />
      ))}
    </WrapperHomeScreen>
  );
};

export default HomeScreen;

const WrapperHomeScreen = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;
