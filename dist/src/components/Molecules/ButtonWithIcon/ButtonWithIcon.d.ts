import React from "react";
import "./buttonwithicon.css";
import { IconsNames } from "../../Atoms/Icon/Icon";
import { ButtonCategoryTypes, ButtonSizes } from "../../Atoms/Button/Button";
export interface ButtonWithIconProps {
    variant: ButtonCategoryTypes;
    size: ButtonSizes;
    label: string;
    iconPosition: 'start' | 'end';
    iconName: IconsNames;
    disabled: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
declare const ButtonWithIcon: React.FC<ButtonWithIconProps>;
export default ButtonWithIcon;
