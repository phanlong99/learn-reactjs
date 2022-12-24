import React from "react";
import "./Colorbox.css";
import propTypes from "proptypes";

function Colorbox(props) {
  const { color, height } = props;

  return (
    <div className='box' style={{ backgroundColor: color, height: height }} />
  );
}

Colorbox.propTypes = {
  color: propTypes.string.isRequired,
  rounded: propTypes.bool,
};

Colorbox.defaultProps = {
  rounded: true,
};

export default Colorbox;
