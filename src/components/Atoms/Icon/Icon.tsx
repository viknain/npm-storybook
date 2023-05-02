import React from "react";
import { iconMap } from "./index";

export interface IconProps {
  iconName: IconsNames;
  onClick?: any;
  fill?: string;
  className?: string;
}

export enum IconsNames {
  circleplus = "circleplus",
  email = "email",
  search = "search",
  closeEye = "closeEye",
  openEye = "openEye",
  upArrowDropdown = "upArrowDropdown",
  downArrowDropdown = "downArrowDropdown",
  inputValidationError = "inputValidationError",
  userIcon = "userIcon",
  menuIcon = "menuIcon",
  sortingDownArrow = "sortingDownArrow",
  closeIcon = "closeIcon",
}

const Icon: React.FC<IconProps> = ({ iconName, className, fill = "#ffffff", ...rest }) => {
  const IconComponent = iconMap[iconName];

  if (IconComponent === undefined) {
    console.warn(`Icon with name: ${iconName} not found.`);
    return <></>;
  }
  return <IconComponent className={className} {...rest} fill={fill} />;
};

export default Icon;
