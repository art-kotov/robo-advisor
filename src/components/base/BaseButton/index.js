// Core
import PropTypes from "prop-types";
import React from "react";

const BaseButton = ({ classname, text }) => {
  return <button className={classname}>{text}</button>;
};

BaseButton.propTypes = {
  classname: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default BaseButton;
