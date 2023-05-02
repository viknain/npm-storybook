import React, { useEffect, useRef, useState } from "react";
import "./dropdown.css";
import classNames from "classnames";
import Icon, { IconsNames } from "../Icon/Icon";

interface OptionType {
  label: string;
  value: string;
}

export interface DropDownProps {
  options: OptionType[];
  value: OptionType | null | undefined;
  placeHolder: string;
  onSelect: (e: OptionType) => void;
}

const Dropdown: React.FC<DropDownProps> = ({
  options = [],
  value = null,
  placeHolder,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>([]);

  const ref = useRef<any>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!ref?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const handleSelect = (option: any) => {
    setSelected(option)
    setIsOpen(false)
  }

  const bindListItems = () => {
    if (!options?.length) {
      return <li>No Option Found</li>;
    }
    return (
      <>
        {options.map((option: OptionType, index: number) => (
          <li key={`option-${index}`} onClick={() => handleSelect(option)}>
            {option.label}
          </li>
        ))}
      </>
    );
  };

  return (
    <div className={classNames("customSelect", "singleDropdown")} ref={ref}>
      <div onClick={() => setIsOpen(!isOpen)} className={classNames("customDropdown")}>
        <label>{selected?.label ? selected.label : placeHolder}</label>
        <Icon
          iconName={
            isOpen ? IconsNames.upArrowDropdown : IconsNames.downArrowDropdown
          }
        />
      </div>
      {isOpen && (
        <div className={classNames("customDropdownOption")}>
          <ul>{bindListItems()}</ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
