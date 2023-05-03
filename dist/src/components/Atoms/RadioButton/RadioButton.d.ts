/// <reference types="react" />
export interface RadioButtonProps {
    label: string;
    value: string | number;
    checked?: boolean;
    className?: string;
    onChange?: (e: any) => void;
}
declare const RadioButton: ({ label, value, checked, className, onChange }: RadioButtonProps) => JSX.Element;
export default RadioButton;
