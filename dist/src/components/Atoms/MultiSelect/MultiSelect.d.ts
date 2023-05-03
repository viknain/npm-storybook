import React from "react";
import "../Dropdown/dropdown.css";
import "./MultiSelect.css";
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
declare const MultiSelectDropdown: React.FC<DropDownProps>;
export default MultiSelectDropdown;
