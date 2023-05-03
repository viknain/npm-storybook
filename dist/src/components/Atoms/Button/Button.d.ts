import React from "react";
import "./button.css";
export interface ButtonProps {
    variant?: ButtonCategoryTypes;
    className?: string;
    size?: ButtonSizes;
    label: string;
    onClick?: () => void;
}
export declare enum ButtonCategoryTypes {
    primary = "primary",
    secondary = "secondary",
    outlined = "outlined"
}
export declare enum ButtonSizes {
    small = "small",
    medium = "medium",
    large = "large"
}
declare const Button: React.FC<ButtonProps>;
export default Button;
