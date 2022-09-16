import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--secondary"];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

const COLOR = ["black", "white", "dark", "light"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
