// Core
import styled from "styled-components";
import { Field } from "formik";

const BaseFormikInput = styled(Field)`
  width: 100%;
  box-sizing: border-box;
  line-height: 40px;
  padding-inline-start: 10px;
  outline: none;
  border: none;
  background: #ffffff;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.15);
`;

export default BaseFormikInput;
