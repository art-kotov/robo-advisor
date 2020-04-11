// Core
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { Field, useFormikContext } from "formik";

const BaseFormikCheckBox = ({ type, name }) => {
  const { values, setFieldValue } = useFormikContext();
  console.log("v", values);
  return (
    <Wrapper>
      <Field
        type={type}
        name={name}
        id={name}
        checked={values[name]}
        onChange={(e) => {
          setFieldValue(name, e.target.checked);
        }}
      />
      <div
        className="checkmark"
        onClick={() => {
          setFieldValue(name, !values[name]);
        }}
      />
    </Wrapper>
  );
};

BaseFormikCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  font-size: 13px;
  line-height: 16px;

  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 19px;
  height: 19px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  letter-spacing: 2px;
  color: #777;

  input {
    position: absolute;
    width: 0;
    height: 0;
    cursor: pointer;
    opacity: 0;
  }

  .checkmark {
    position: relative;
    display: block;
    box-sizing: border-box;
    width: 19px;
    height: 19px;
    border: 1px solid #e7e7e7;
    background: #fff;
    cursor: pointer;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ .checkmark {
    border: 1px solid var(--c-blue);
    background-color: var(--c-blue);
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    position: absolute;
    display: none;
    content: "";
  }

  /* Show the checkmark when checked */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .checkmark:after {
    top: 1px;
    left: 5px;
    width: 5px;
    height: 10px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    border: solid white;
    border-width: 0 3px 3px 0;
  }
`;

export default BaseFormikCheckBox;
