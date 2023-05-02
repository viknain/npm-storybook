import React, { useEffect, useRef, useState } from "react";
import "../Dropdown/dropdown.css";
import "./MultiSelect.css"
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

const MultiSelectDropdown: React.FC<DropDownProps> = ({
    options = [],
    value,
    placeHolder,
    onSelect,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<any>([]);
    const [orderedOptions, setOrderedOptions] = useState<any[]>([])

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
        if (selected.includes(option.value)) {
            const filteredItems = selected.filter((item: any) => item !== option.value)
            setSelected(filteredItems)
        } else {
            setSelected([...selected, option?.value])
        }
    }

    const handleSelectAll = () => {
        const option = options.map((item: any) => item.value)
        if (selected.length === option.length) {
            setSelected([])
        } else {
            setSelected(option)
        }
    }

    useEffect(() => {
        if (selected?.length) {
            let orderedList: any[] = []
            options.filter((item) => {
                const isSelected = selected.find((x: any) => x === item.value);
                if (isSelected) {
                    orderedList.unshift(item)
                } else {
                    orderedList.push(item)
                }
            })
            setOrderedOptions(orderedList)
        } else {
            setOrderedOptions(options)
        }
    }, [selected, options])

    const bindListItems = () => {
        if (!options?.length) {
            return <li>No Option Found</li>;
        }
        return (
            <>
                <div className={classNames("selectAllContainer")} onClick={handleSelectAll}>
                    <input type="checkbox"
                        checked={selected.length === options.length}
                    />
                    <li key='Select All' value='all'>
                        Select All
                    </li>
                </div>
                {orderedOptions?.map((option: OptionType, index: number) => (
                    <div className={classNames("menuItemsContainer")} onClick={() => handleSelect(option)} key={`option-${option?.label}`}>
                        <input type="checkbox" checked={selected.indexOf(option.value) > -1} />
                        <li key={`option-${index}`}>
                            {option.label}
                        </li>
                    </div>
                ))}
            </>
        );
    };

    const removeMenuItem = (item: any) => {
        const selectedValue = orderedOptions?.filter((item: any) => selected?.includes(item.value) ? item : false)
        const updatedItems = selectedValue?.filter((option: any) => option?.label !== item)
        setSelected(updatedItems?.map((item: any) => item?.value))
    }

    const showRenderedValue = () => {
        const selectedValue = orderedOptions?.filter((item: any) => selected?.includes(item.value) ? item : false)
        const val = selectedValue.map((item: any) => item.label)
        return (
            <div style={{ display: "flex", gap: "10px" }}>
                {val.slice(0, 3).map((item) => {
                    return <div style={{ display: "flex", gap: "10px" }}>
                        <p style={{ background: "red" }}>{item}</p>
                        <Icon iconName={IconsNames.closeIcon} onClick={() => removeMenuItem(item)} />
                    </div>
                })}
                {val.length > 3 && <p>+ {val?.length - 3}</p>}
            </div>
        )
    }

    return (
        <div className={classNames("customSelect")} ref={ref}>
            <div onClick={() => setIsOpen(!isOpen)} className={classNames("customDropdown")}>
                <label>{selected?.length ? showRenderedValue() : placeHolder}</label>
                <Icon
                    iconName={
                        isOpen ? IconsNames.upArrowDropdown : IconsNames.downArrowDropdown
                    }
                />
            </div>
            {isOpen && (
                <div className={classNames("customDropdownOption")} >
                    <ul>
                        {bindListItems()}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
