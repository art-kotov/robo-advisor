// Core
import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Trans, withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobXProviderContext, observer } from "mobx-react";
// Components
import BaseFormikInput from "../base/BaseFormikInput";
import BaseFormLabel from "../base/BaseFormLabel";
import BaseFormGroup from "../base/BaseFormGroup";
import BaseFormikCheckBox from "../base/BaseFormikCheckBox";
import { signIpForm } from "../../services/formsData";
import BaseFormInputMask from "../base/BaseFormInputMask";
import BaseFormErrorMessage from "../base/BaseFormErrorMessage";
import BaseServerErrorMessage from "../base/BaseServerErrorMessage";
import BaseButton from "../base/BaseButton";

const EnterSignInForm = () => {
  const { userStore } = useContext(MobXProviderContext);

  return (
    <>
      <Formik
        initialValues={signIpForm.initialValues}
        validationSchema={signIpForm.validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values) => {
          await userStore.signIn(values);
        }}
      >
        {() => (
          <Form>
            <BaseFormGroup>
              <BaseFormLabel htmlFor="phone">
                <Trans i18nKey="signUp.number" />
              </BaseFormLabel>
              <BaseFormInputMask
                name="phone"
                lazy={false}
                placeholderChar="x"
                placeholder="Enter number here"
              />
              <BaseFormErrorMessage name="phone" />
              <BaseServerErrorMessage storeName="userStore" fieldName="phone" />
            </BaseFormGroup>
            <BaseFormGroup>
              <BaseFormLabel htmlFor="password">
                <Trans i18nKey="signUp.password" />
              </BaseFormLabel>
              <BaseFormikInput name="password" id="password" />
              <BaseFormErrorMessage name="password" />
              <BaseServerErrorMessage
                storeName="userStore"
                fieldName="password"
              />
            </BaseFormGroup>
            <BlockCheckBox>
              <BaseFormikCheckBox name="remember" type="checkbox" />
              <label htmlFor="remember">
                <Trans i18nKey="signIn.rememberMe" />
              </label>
            </BlockCheckBox>
            <ButtonsWrapper>
              <BaseButton type="submit" minWidth="115px">
                <Trans i18nKey="signIn.signIn" />
              </BaseButton>
              <StyledLink to="/sign-up">
                <Trans i18nKey="signIn.register" />
              </StyledLink>
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
      <AdditionalInfo>
        <Trans i18nKey="signUp.agree">
          By clicking Sign up you agree to our
          <Link to="/">terms of service</Link>
        </Trans>
      </AdditionalInfo>
    </>
  );
};

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 190px;
  line-height: 40px;
  color: var(--c-blue);
  text-decoration: none;
  background-color: var(--c-white);
  box-shadow: inset 0 0 0 1px var(--c-blue);
  cursor: pointer;
`;

const AdditionalInfo = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  border-top: 1px solid var(--с-gray-dark-opacity);
`;

const BlockCheckBox = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  label {
    margin-inline-start: 10px;
  }
  input {
    background: #ffffff;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
  }
`;

export default withTranslation()(observer(EnterSignInForm));
