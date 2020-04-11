// Core
import PropTypes from "prop-types";
import React from "react";
import { IMaskInput } from "react-imask";
import styled from "styled-components";
import { useFormikContext } from "formik";

const BaseFormInputMask = ({ name, placeholderChar, placeholder, lazy }) => {
  const { values, setFieldValue } = useFormikContext();
  return (
    <StyledInput
      /* eslint-disable-next-line no-octal-escape */
      mask="\0500000000"
      value={values[name]}
      lazy={lazy}
      placeholderChar={placeholderChar}
      placeholder={placeholder}
      onAccept={(value) => {
        setFieldValue(name, value);
      }}
    />
  );
};

BaseFormInputMask.propTypes = {
  lazy: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  placeholderChar: PropTypes.string.isRequired,
};

BaseFormInputMask.defaultProps = {
  lazy: false,
};

const StyledInput = styled(IMaskInput)`
  width: 100%;
  line-height: 40px;
  padding-inline-start: 10px;
  outline: none;
  border: none;
  background: #ffffff;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.15);
`;

export default BaseFormInputMask;
