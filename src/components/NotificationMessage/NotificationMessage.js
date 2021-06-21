import React from "react";
import PropTypes from "prop-types";

const NotificationMessage = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMessage;
