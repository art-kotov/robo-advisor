// Core
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { MobXProviderContext, observer } from "mobx-react";
import styled from "styled-components";

const BaseServerErrorMessage = ({ storeName, fieldName }) => {
  const store = useContext(MobXProviderContext);
  const currentStore = store[storeName];

  return currentStore
    .getServerErrors()
    [fieldName].map((i, index) => <StyledError key={index}>{i}</StyledError>);
};

BaseServerErrorMessage.propTypes = {
  storeName: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
};

const StyledError = styled.div`
  margin-top: 5px;
  color: red;
`;

export default observer(BaseServerErrorMessage);
