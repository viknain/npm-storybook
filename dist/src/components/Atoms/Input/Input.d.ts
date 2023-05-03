import React from "react";
import "./input.css";
export interface InputProps {
    placeHolder?: string;
    type: InputTypes;
    size?: InputSizes;
    value: any;
    errorMessage?: string;
    variant?: InputCategories;
    className?: string;
    label: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare enum InputTypes {
    text = "text",
    password = "password",
    number = "number"
}
export declare enum InputSizes {
    small = "small",
    medium = "medium",
    large = "large"
}
export declare enum InputCategories {
    filled = "filled",
    outlined = "outlined"
}
declare const Input: React.FC<InputProps>;
export default Input;
