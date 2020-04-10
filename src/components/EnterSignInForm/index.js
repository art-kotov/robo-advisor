// Core
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Components
import BaseFormikInput from "../base/BaseFormikInput";
import BaseFormLabel from "../base/BaseFormLabel";
import BaseFormGroup from "../base/BaseFormGroup";
import BaseFormikCheckBox from "../base/BaseFormikCheckBox";

const EnterSignInForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          phone: "+375295555555",
          password: "qwerty123",
          remember: false,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <BaseFormGroup>
              <BaseFormLabel htmlFor="phone">
                <Trans i18nKey="signUp.number" />
              </BaseFormLabel>
              <BaseFormikInput name="phone" id="phone" />
              <ErrorMessage name="phone" />
            </BaseFormGroup>
            <BaseFormGroup>
              <BaseFormLabel htmlFor="password">
                <Trans i18nKey="signUp.password" />
              </BaseFormLabel>
              <BaseFormikInput name="password" id="password" />
              <ErrorMessage name="password" />
            </BaseFormGroup>
            <BlockCheckBox>
              <BaseFormikCheckBox
                name="remember"
                type="checkbox"
                value={values.remember}
                setFieldValue={setFieldValue}
              />
              <label htmlFor="remember">
                <Trans i18nKey="signIn.rememberMe" />
              </label>
            </BlockCheckBox>
            <button type="submit">
              <Trans i18nKey="signIn.signIn" />
            </button>
            <Link to="/sign-up">
              <Trans i18nKey="signIn.register" />
            </Link>
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

const AdditionalInfo = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  border-top: 1px solid rgba(48, 54, 61, 0.3);
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

export default EnterSignInForm;
