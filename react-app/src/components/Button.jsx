import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary--solid",
  "btn--primary--outline",
  "btn--tertiary--solid",
];

const SIZES = ["btn--medium", "btn--large"];

const POSITIONS = [
  "btn--topleft",
  "btn--topcenter",
  "btn--topright",
  "btn--centerleft",
  "btn--centercenter",
  "btn--centerright",
  "btn--bottomleft",
  "btn--bottomcenter",
  "btn--bottomright",
  "btn--schedule",
];

const ID = ["s", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

export function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonPosition,
  id,
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkButtonPosition = POSITIONS.includes(buttonPosition)
    ? buttonPosition
    : POSITIONS[0];

  const checkid = ID.includes(id) ? id : ID[0];

  return (
    <button
      id={checkid}
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonPosition}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}