import React from "react";
import "./InputIcon.css";
import { Colors } from "../../../componentTypes/Color";
import classNames from "classnames";
import Icon, { IconsNames } from "../../Atoms/Icon/Icon";
import { InputCategories, InputSizes, InputTypes } from "../../Atoms/Input/Input";

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

const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeHolder = "PlaceHolder",
  type = "text",
  value,
  onChange,
  errorMessage = "",
  iconName = IconsNames.closeEye,
  size,
  variant,
  ...props
}) => {

  return (
    <>
      <div className={classNames("textField")}>
        <input
          placeholder={placeHolder}
          value={value}
          type={type}
          onChange={onChange}
          {...props}
          className={classNames({
            "inputErrormessage": errorMessage,
            "inputMedium": size === InputSizes.medium,
            "inputLarge": size === InputSizes.large,
            "inputOutlined": variant === InputCategories.outlined,
            "inputFilled": variant === InputCategories.filled,
          })}
        />
        <div className={classNames("textFieldIcon", {
          "textFieldIconMedium": size === InputSizes.medium,
          "textFieldIconLarge": size === InputSizes.large,
        })}>
          <Icon iconName={iconName} fill={Colors.gray} />
        </div>

      </div>
      {errorMessage && (
        <div className={classNames()}>
          <Icon iconName={IconsNames.inputValidationError} />
          <label>{errorMessage}</label>
        </div>
      )}
    </>
  );
};

export default InputWithIcon;
