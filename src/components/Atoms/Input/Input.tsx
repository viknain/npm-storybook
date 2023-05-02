import React from "react";
import "./input.css";
import classNames from "classnames";
import Icon, { IconsNames } from "../Icon/Icon";

export interface InputProps {
  placeHolder?: string;
  type: InputTypes;
  size?: InputSizes
  value: any;
  errorMessage?: string;
  variant?: InputCategories;
  className?: string;
  label: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export enum InputTypes {
  text = "text",
  password = "password",
  number = "number",
}

export enum InputSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum InputCategories {
  filled = "filled",
  outlined = "outlined",
}

const Input: React.FC<InputProps> = ({
  placeHolder = "placeHolder",
  type = "text",
  size = "small",
  value,
  errorMessage = "",
  variant = InputCategories.outlined,
  className,
  label,
  disabled,
  onChange,
  ...props
}) => {
  return (
    <div className="inputWrapper">
      <input
        value={value}
        type={type === InputTypes.password ? "password" : type === InputTypes.number ? "number" : "text"}
        onChange={onChange}
        className={classNames(`input ${className}`, {
          "inputErrorMessage": errorMessage,
          "inputMedium": size === InputSizes.medium,
          "inputLarge": size === InputSizes.large,
          "inputOutlined": variant === InputCategories.outlined,
          "inputFilled": variant === InputCategories.filled,
        })}
        placeholder=" "
        readOnly={disabled}
        {...props}
      />
      <label>{label}</label>
      {errorMessage && (
        <div className="errorWrapper">
          <Icon
            iconName={IconsNames.inputValidationError}
            fill="#e62e5c"
          />
          <label>{errorMessage}</label>
        </div>
      )}
    </div>
  );
};

export default Input;
