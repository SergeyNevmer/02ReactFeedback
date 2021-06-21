import React from "react";
import PropTypes from "prop-types";

const Section = ({ message }) => {
  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

Section.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Section;
