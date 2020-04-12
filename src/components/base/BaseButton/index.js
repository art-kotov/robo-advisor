// Core
import PropTypes from "prop-types";
import styled from "styled-components";

const chooseTextColor = (color) => {
  switch (color) {
    case "black": {
      return "var(--с-gray-dark)";
    }
    default: {
      return "var(--c-white)";
    }
  }
};

const chooseBackgroundColor = (color) => {
  switch (color) {
    case "blue": {
      return "var(--c-blue)";
    }
    case "purple": {
      return "var(--c-purple)";
    }
    case "white": {
      return "var(--c-white)";
    }
    default: {
      return "var(--c-blue)";
    }
  }
};

const BaseButton = styled.button`
  height: 40px;
  background-color: ${(props) => chooseBackgroundColor(props.backgroundColor)};
  color: ${(props) => chooseTextColor(props.textColor)};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "auto")};
  font-weight: 500;
  font-size: 18px;
  border: ${(props) => (props.withBorder ? "1px solid var(--c-blue)" : "none")};
  box-shadow: ${(props) =>
    props.withShadow ? "1px 1px 1px rgba(0, 0, 0, 0.25)" : "unset"};
  border-radius: ${(props) => (props.withRadius ? "5px" : "unset")};
  cursor: pointer;
`;

BaseButton.propTypes = {
  minWidth: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  type: PropTypes.string,
  withRadius: PropTypes.bool,
  withShadow: PropTypes.bool,
  withBorder: PropTypes.bool,
};

BaseButton.defaultProps = {
  type: "button",
};

export default BaseButton;
