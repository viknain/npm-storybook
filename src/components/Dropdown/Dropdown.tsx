import React, { useState } from "react";
import PropTypes, { arrayOf, shape, string } from "prop-types";
import DDIcon from "../Icon/Icon";
import { DDIconsNames } from "../../componentTypes/Icon";
import "./dropdown.css";

interface DDOptionType {
  label: string;
  value: string;
}

export interface DropDownProps {
  options: DDOptionType[];
  value: DDOptionType | null | undefined;
  placeHolder: string;
  onSelect: (e: DDOptionType) => void;
}

/**
 * Primary UI component for user interaction
 */
const DDDropdown: React.FC<DropDownProps> = ({
  options = [],
  value = null,
  placeHolder,
  onSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const bindListItems = () => {
    if (!options?.length) {
      return <li>No Option Found</li>;
    }
    return (
      <>
        <li className="dd-defult-selected">Selected Option</li>
        {options.map((option: DDOptionType, index: number) => (
          <li key={`option-${index}`} onClick={() => onSelect(option)}>
            {option.label}
          </li>
        ))}
      </>
    );
  };
  return (
    <div className="dd-custom-select">
      <h2 className="dd-heading">Heading</h2>
      <div onClick={() => setIsOpen(!isOpen)} className="dd-custom-dropdown">
        <label>{value?.label ? value.label : placeHolder}</label>
        <DDIcon
          iconName={
            isOpen ? DDIconsNames.upArrowDropdown : DDIconsNames.upArrowDropdown
          }
        />
      </div>
      {isOpen && (
        <div className="dd-custom-dropdown-option">
          <ul>{bindListItems()}</ul>
        </div>
      )}
    </div>
  );
};

DDDropdown.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  options: arrayOf(
    shape({
      value: string.isRequired,
      label: string.isRequired,
    }).isRequired
  ).isRequired,
};

export default DDDropdown;
