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

const EnterSignUpForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          phone: "+375295555555",
          password: "qwerty123",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
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
            <button type="submit">
              <Trans i18nKey="signUp.signUp" />
            </button>
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

export default EnterSignUpForm;
