// Core
import React, { useState } from "react";
import styled from "styled-components";
// Components
import BaseButton from "../base/BaseButton";

const KYCValues = {
  monthly_income: [
    ["<10", "Below 10K"],
    ["10<>20", "10-20K"],
    ["20<>30", "20-30K"],
    [">30", "Above 30K"],
  ],
  wealth: [
    ["<100", "Below 100K"],
    ["100<>1", "100K-1M"],
    ["1<>5", "1M-5M"],
    [">5", "Above 5M"],
  ],
  age: [
    ["<30", "Below 30"],
    ["30<>45", "30-45"],
    ["45<>60", "45-60"],
    [">60", "Above 60"],
  ],
  risk_appetite: [
    [1, "1(low)"],
    [2, "2"],
    [3, "3"],
    [4, "4(high)"],
  ],
};

const KYCForm = () => {
  const [values, setValues] = useState({
    monthly_income: KYCValues.monthly_income[0][0],
    wealth: KYCValues.wealth[0][0],
    age: KYCValues.age[0][0],
    risk_appetite: KYCValues.risk_appetite[0][0],
  });

  const getKYCValue = (name) => {
    return KYCValues[name].map((i, index) => (
      <Button
        key={index}
        onClick={() =>
          setValues((prevState) => ({ ...prevState, [name]: i[0] }))
        }
        isActive={i[0] === values[name]}
      >
        {i[1]}
      </Button>
    ));
  };

  return (
    <>
      <KYCHeader>Please, help us get to know you better</KYCHeader>
      <div>
        <ButtonsGroup>
          <ButtonsHeader>Monthly Income, SAR</ButtonsHeader>
          <ButtonsWrapper>{getKYCValue("monthly_income")}</ButtonsWrapper>
        </ButtonsGroup>
        <ButtonsGroup>
          <ButtonsHeader>Wealth, SAR</ButtonsHeader>
          <ButtonsWrapper>{getKYCValue("wealth")}</ButtonsWrapper>
        </ButtonsGroup>
        <ButtonsGroup>
          <ButtonsHeader>Age</ButtonsHeader>
          <ButtonsWrapper>{getKYCValue("age")}</ButtonsWrapper>
        </ButtonsGroup>
        <ButtonsGroup>
          <ButtonsHeader>Your risk appetite</ButtonsHeader>
          <ButtonsWrapper>{getKYCValue("risk_appetite")}</ButtonsWrapper>
        </ButtonsGroup>
        <StyledBaseButton minWidth="100%">لاسرا</StyledBaseButton>
      </div>
    </>
  );
};

const KYCHeader = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
`;

const ButtonsGroup = styled.div`
  margin-bottom: 20px;
`;

const ButtonsHeader = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
  grid-gap: 10px;
  justify-content: space-between;
  direction: ltr;
`;

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 5px;
  color: ${({ isActive }) => (isActive ? "var(--c-white)" : "var(--c-blue)")};
  text-decoration: none;
  background-color: ${({ isActive }) =>
    isActive ? "var(--c-blue)" : "var(--с-gray-light)"};
  box-shadow: inset 0 0 0 1px var(--c-blue);
  cursor: pointer;
`;

const StyledBaseButton = styled(BaseButton)`
  margin-top: 20px;
`;

export default KYCForm;
