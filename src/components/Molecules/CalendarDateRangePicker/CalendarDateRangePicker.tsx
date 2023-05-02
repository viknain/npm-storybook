import { useEffect, useRef, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "./CalendarDateRangePicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import React from "react";
import classNames from "classnames";

export interface CalendarDateRangePickerProps {
    createdDate: any[];
    onChange: () => void
}

const CalendarDateRangePicker = ({ createdDate, onChange }: any) => {
    const [selectedDate, setSelectedDate] = useState<any>(createdDate ? createdDate : ["", ""]);
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<any>();

    const handleDateRangeChange = (date: any) => {
        setSelectedDate([date?.range1])
        onChange([date?.[0]?.$d, date?.[1]?.$d])
    }

    // Convert Date format to mm/dd/yyyy
    const getFormattedDate = (date: any) => {
        return new Date(date).toLocaleDateString("en-US", {  year: "numeric", month: "2-digit", day: "2-digit", });
    }

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (!ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    useEffect(() => {
        const startDate = getFormattedDate(selectedDate?.[0]?.startDate)
        const endDate = getFormattedDate(selectedDate?.[0]?.endDate)
        if (startDate !== endDate) {
            setIsOpen(false);
        }
    }, [selectedDate])

    return (
        <div>
            <div className={classNames("dateInputWrapper")}>
                {/* <Input placeHolder="Start Date" type={InputTypes.text} category={InputCategories.outlined} value={getFormattedDate(selectedDate?.[0]?.startDate)}
                    size={InputSizes.small} label="Start Date" readOnly={true} className={classNames("dateInputWrapperInner")} onClick={() => setIsOpen(true)} />
                <p>-</p>
                <Input placeHolder="End Date" type={InputTypes.text} category={InputCategories.outlined} value={getFormattedDate(selectedDate?.[0]?.endDate)}
                    size={InputSizes.small} label="End Date" readOnly={true} className={classNames("dateInputWrapperInnerSection")} onClick={() => setIsOpen(true)} /> */}

                {/* <input value={`${getFormattedDate(selectedDate?.[0]?.startDate)} - ${getFormattedDate(selectedDate?.[0]?.endDate)}`}
                    onClick={() => setIsOpen(true)} readOnly={true} /> */}

                    <label className="inputLabel" onClick={() => setIsOpen(true)}>{`${getFormattedDate(selectedDate?.[0]?.startDate)} - ${getFormattedDate(selectedDate?.[0]?.endDate)}`}</label>
            </div>
            <div className={classNames("datePickerWrapper")} ref={ref}>
                {isOpen && <DateRangePicker
                    onChange={date => handleDateRangeChange(date)}
                    moveRangeOnFirstSelection={false}
                    showDateDisplay={false}
                    months={2}
                    color="green"
                    ranges={selectedDate}
                    direction="horizontal"
                    rangeColors={["#27c1f1", "red", "green"]}
                    showMonthAndYearPickers={false}
                    showPreview={false}
                    maxDate={new Date()}
                    editableDateInputs={false}
                    monthDisplayFormat="MMMM yyyy"
                    weekdayDisplayFormat="EEEEE"
                />}
            </div>
        </div>
    );
}

export default CalendarDateRangePicker
