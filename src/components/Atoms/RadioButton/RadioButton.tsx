import classNames from 'classnames';
import React from 'react'

export interface RadioButtonProps {
    label: string;
    value: string | number;
    checked?: boolean;
    className?: string;
    onChange?: (e: any) => void;
}

const RadioButton = ({ label, value, checked, className, onChange }: RadioButtonProps) => {

    return <div className={className}>
        <input type='radio' name={label} value={value} onChange={onChange} checked={checked} id={label} />
       <label htmlFor={label}>{label}</label>
    </div>
}

export default RadioButton