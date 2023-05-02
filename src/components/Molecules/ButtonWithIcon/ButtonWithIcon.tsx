import React from "react";
import "./buttonwithicon.css";
import classNames from "classnames";
import Icon, { IconsNames } from "../../Atoms/Icon/Icon";
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

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  iconPosition,
  disabled,
  iconName = IconsNames.circleplus,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      className={classNames('buttonWithIcon', {
        buttonPrimary: variant === ButtonCategoryTypes.primary,
        buttonSecondary: variant === ButtonCategoryTypes.secondary,
        buttonOutlined: variant === ButtonCategoryTypes.outlined,
        buttonSmall: size === ButtonSizes.small,
        buttonMedium: size === ButtonSizes.medium,
        buttonLarge: size === ButtonSizes.large,
      })}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'start' && <Icon iconName={iconName} className="iconStyle" />}
      {label}
      {iconPosition === 'end' && <Icon iconName={iconName} className="iconStyle" />}
    </button>
  );
};

export default ButtonWithIcon;
