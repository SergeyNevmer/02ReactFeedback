import React from "react";
import PropTypes from "prop-types";
import styles from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ onHandleClick }) => {
  return (
    <>
      <button type="submit" name="good" onClick={onHandleClick}>
        Good
      </button>
      <button
        type="submit"
        className={styles.secondBtn}
        name="neutral"
        onClick={onHandleClick}
      >
        Neutral
      </button>
      <button type="submit" name="bad" onClick={onHandleClick}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onHandleClick: PropTypes.func,
};

export default FeedbackOptions;
