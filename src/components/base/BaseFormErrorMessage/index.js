// Core
import PropTypes from "prop-types";
import styled from "styled-components";
import { ErrorMessage } from "formik";

const BaseFormErrorMessage = styled(ErrorMessage)`
  color: red;
`;

BaseFormErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

BaseFormErrorMessage.defaultProps = {
  component: "div",
};

export default BaseFormErrorMessage;
