import React from "react";
import { ButtonCategoryTypes, ButtonSizes } from "../../componentTypes/Button";
import PropTypes from "prop-types";
import "./button.css";

export interface ButtonProps {
  category: ButtonCategoryTypes;
  size: ButtonSizes;
  label: string;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
const DDButton: React.FC<ButtonProps> = ({
  category = "primary",
  size = "medium",
  label,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "dd-button",
        `dd-button-${size}`,
        `dd-button-${category}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

DDButton.propTypes = {
    label: PropTypes.string.isRequired,
    category: PropTypes.oneOf<ButtonCategoryTypes>(Object.values(ButtonCategoryTypes)).isRequired,
    size: PropTypes.oneOf<ButtonSizes>(Object.values(ButtonSizes)).isRequired,
    onClick: PropTypes.func.isRequired
  };

export default DDButton;
