import React from 'react'
import "./checkbox.css"

export interface CheckboxProps {
    label: string;
    checked?: boolean;
    onChange: (e: any) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
        <label className="container">
            <input type="checkbox" checked={checked} id={label} onChange={onChange} />
            <label htmlFor={label} className="checkmark">{label}</label>
        </label>
    )
}

export default Checkbox