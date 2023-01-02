import React from "react";
import PropTypes from "prop-types";
import { DDInputTypes } from "../../componentTypes/Input";
import "./input.css";
import DDIcon from "../Icon/Icon";
import { DDIconsNames } from "../../componentTypes/Icon";

export interface InputProps {
  placeHolder: string;
  type: DDInputTypes;
  value: any;
  errorMessage: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
const DDInput: React.FC<InputProps> = ({
  placeHolder = "placeHolder",
  type = "text",
  value,
  errorMessage = "",
  onChange,
  ...props
}) => {
  return (
    <div>
      <h3 className="dd-input-heading">Heading</h3>
      <input
        value={value}
        type={type}
        onChange={onChange}
        className={["dd-input", `${errorMessage ? "dd-input-error" : ""}`].join(
          " "
        )}
        {...props}
      ></input>
      {errorMessage && (
        <div>
          <div className="dd-input-errormessage">
            <DDIcon
              iconName={DDIconsNames.inputValidationError}
              fill="#e62e5c"
            />
            <label>{errorMessage}</label>
          </div>
        </div>
      )}
    </div>
  );
};

DDInput.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.oneOf<DDInputTypes>(Object.values(DDInputTypes)).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default DDInput;
