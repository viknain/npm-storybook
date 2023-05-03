/// <reference types="react" />
import "./checkbox.css";
export interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange: (e: any) => void;
}
declare const Checkbox: ({ label, checked, onChange }: CheckboxProps) => JSX.Element;
export default Checkbox;
