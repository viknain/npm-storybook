import React, { useState } from 'react'
import RadioButton from '../../Atoms/RadioButton/RadioButton'
import classNames from 'classnames'
import "./Radio.css";

interface OptionType {
    label: string;
    value: string;
  }

export interface RadioProps {
    options: OptionType[];
    title: string
}

const Radio = ({ options, title }: RadioProps) => {
    const [value, setValue] = useState<string>("")

    return (
        <div className={classNames("radioMain")}>
            <p>{title}</p>
            {options?.map((item: any, index: number) => <RadioButton key={index} label={item?.label} value={item?.value} checked={value === item?.value}
                className={classNames("radioBtn")}
                onChange={(e: any) => setValue(e.target.value)} />)}
        </div>
    )
}

export default Radio