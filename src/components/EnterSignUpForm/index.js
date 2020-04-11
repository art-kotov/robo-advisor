// Core
import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Trans, withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MobXProviderContext, observer } from "mobx-react";
// Instruments
import { signUpForm } from "../../services/formsData";
// Components
import BaseFormikInput from "../base/BaseFormikInput";
import BaseFormLabel from "../base/BaseFormLabel";
import BaseFormGroup from "../base/BaseFormGroup";
import BaseFormErrorMessage from "../base/BaseFormErrorMessage";
import BaseFormInputMask from "../base/BaseFormInputMask";
import BaseServerErrorMessage from "../base/BaseServerErrorMessage";

const EnterSignUpForm = () => {
  const { userStore } = useContext(MobXProviderContext);
  return (
    <>
      <Formik
        initialValues={signUpForm.initialValues}
        validationSchema={signUpForm.validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values) => {
          userStore.register(values);
        }}
      >
        {({ isSubmitting }) => (
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
            <button type="submit" disabled={isSubmitting}>
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

export default withTranslation()(observer(EnterSignUpForm));
