import React, { useState } from "react";
import PropTypes from "prop-types";

const Button = ({ value, onClick, color, hoverColor, activeColor }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({
    background: color,
  });

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      onClick();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !isClicked) {
      setIsClicked(true);
      onClick();
    }
  };

  const handleMouseEnter = () => {
    setButtonStyle({ ...buttonStyle, background: hoverColor });
  };

  const handleMouseLeave = () => {
    setButtonStyle({ ...buttonStyle, background: color });
  };

  const handleMouseUp = () => {
    setButtonStyle({ ...buttonStyle, background: activeColor });
  };

  const handleMouseDown = () => {
    setButtonStyle({ ...buttonStyle, background: color });
  };

  return (
    <div className="button-wrapper">
      <button
        className={`button ${isClicked ? "clicked" : ""}`}
        style={buttonStyle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
      >
        {value}
      </button>
    </div>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  hoverColor: PropTypes.string,
  activeColor: PropTypes.string,
};

export default Button;
