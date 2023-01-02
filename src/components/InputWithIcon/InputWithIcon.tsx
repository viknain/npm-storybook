import React from "react";
import PropTypes from "prop-types";
import { DDInputTypes } from "../../componentTypes/Input";
import "./inputwithicon.css";
import DDIcon from "../Icon/Icon";
import { DDIconsNames } from "../../componentTypes/Icon";
import { DDColors } from "../../componentTypes/Color";

export interface InputWithIconProps {
  placeHolder: string;
  type: DDInputTypes;
  value: any;
  iconName: DDIconsNames;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
const DDInputWithIcon: React.FC<InputWithIconProps> = ({
  placeHolder = "placeHolder",
  type = "text",
  value,
  onChange,
  errorMessage = "",
  iconName,
  ...props
}) => {
 
  return (
    <>
    <div className={["dd-input", "dd-input-icon",  `${errorMessage ? 'dd-input-error' : ''}`].join(" ")}>
      <input
        placeholder={placeHolder}
        value={value}
        type={type}
        onChange={onChange}
        {...props}
      />
      <div className="dd-custom-input-icon">
        <DDIcon iconName={iconName} fill={DDColors.gray} />
      </div>
     
    </div>
     {errorMessage && (
      <div className="dd-input-errormessage">
        <DDIcon iconName={DDIconsNames.inputValidationError} />
        <label>{errorMessage}</label>
      </div>
    )}
    </>
  );
};

DDInputWithIcon.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.oneOf<DDInputTypes>(Object.values(DDInputTypes)).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  iconName: PropTypes.oneOf<DDIconsNames>(Object.values(DDIconsNames))
    .isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default DDInputWithIcon;
