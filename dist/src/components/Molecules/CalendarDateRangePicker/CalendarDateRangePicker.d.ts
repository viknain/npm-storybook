/// <reference types="react" />
import "./CalendarDateRangePicker.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
export interface CalendarDateRangePickerProps {
    createdDate: any[];
    onChange: () => void;
}
declare const CalendarDateRangePicker: ({ createdDate, onChange }: any) => JSX.Element;
export default CalendarDateRangePicker;
