import React from "react";
export interface IconProps {
    iconName: IconsNames;
    onClick?: any;
    fill?: string;
    className?: string;
}
export declare enum IconsNames {
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
    closeIcon = "closeIcon"
}
declare const Icon: React.FC<IconProps>;
export default Icon;
