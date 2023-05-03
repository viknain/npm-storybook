import React from "react";
import "./dropdown.css";
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
declare const Dropdown: React.FC<DropDownProps>;
export default Dropdown;
