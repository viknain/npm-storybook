import React from "react";
import "./InputIcon.css";
import { IconsNames } from "../../Atoms/Icon/Icon";
import { InputTypes } from "../../Atoms/Input/Input";
export interface InputWithIconProps {
    placeHolder?: string;
    type: InputTypes;
    value: any;
    iconName?: IconsNames;
    errorMessage?: string;
    size?: string;
    variant?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const InputWithIcon: React.FC<InputWithIconProps>;
export default InputWithIcon;
