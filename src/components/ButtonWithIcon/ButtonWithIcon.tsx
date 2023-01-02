import React from "react";
import PropTypes from "prop-types";
import "../Button/button.css";
import "./buttonwithicon.css";
import {
  ButtonCategoryTypes,
  ButtonSizes,
} from "../../componentTypes/Button";
import DDIcon from "../Icon/Icon";
import { DDIconsNames } from "../../componentTypes/Icon";

export interface ButtonWithIconProps {
  category: ButtonCategoryTypes;
  size: ButtonSizes;
  label: string;
  iconPosition: "start" | "end";
  iconName: DDIconsNames;
  onClick: () => void;
}

/**
 * Primary UI component for user interaction
 */
const DDButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  category = "primary",
  size = "medium",
  label,
  iconPosition,
  iconName = DDIconsNames.circleplus,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "dd-button",
        `dd-button-${size}`,
        `dd-button-${category}`,
      ].join(" ")}
      {...props}
    >
      {iconPosition === "start" && (
        <div className="dd-icon-right">
          <DDIcon iconName={iconName} fill="white" />
        </div>
      )}
      {label}
      {iconPosition === "end" && (
        <div className="dd-icon-left">
          <DDIcon iconName={iconName}  fill="white"/>
        </div>
      )}
    </button>
  );
};

DDButtonWithIcon.propTypes = {
  label: PropTypes.string.isRequired,
  iconName: PropTypes.oneOf<DDIconsNames>(
    Object.values(DDIconsNames)
  ).isRequired,
  category: PropTypes.oneOf<ButtonCategoryTypes>(
    Object.values(ButtonCategoryTypes)
  ).isRequired,
  size: PropTypes.oneOf<ButtonSizes>(Object.values(ButtonSizes)).isRequired,
};

export default DDButtonWithIcon;
