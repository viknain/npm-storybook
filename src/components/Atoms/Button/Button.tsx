import React from "react";
import classNames from "classnames"
import "./button.css";

export interface ButtonProps {
  variant?: ButtonCategoryTypes;
  className?: string;
  size?: ButtonSizes;
  label: string;
  onClick?: () => void;
}

export enum ButtonCategoryTypes {
  primary = "primary",
  secondary = "secondary",
  outlined = "outlined",
}

export enum ButtonSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "primary",
  size = "medium",
  label,
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('button', {
        'buttonPrimary': variant === ButtonCategoryTypes.primary,
        'buttonSecondary': variant === ButtonCategoryTypes.secondary,
        'buttonOutlined': variant === ButtonCategoryTypes.outlined,
        'buttonSmall': size === ButtonSizes.small,
        'buttonMedium': size === ButtonSizes.medium,
        'buttonLarge': size === ButtonSizes.large,
        [className]: Boolean(className),
      })}
      {...props}
    >
      {label}
    </button>
  );
};


export default Button;
