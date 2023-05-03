/// <reference types="react" />
import "./Radio.css";
interface OptionType {
    label: string;
    value: string;
}
export interface RadioProps {
    options: OptionType[];
    title: string;
}
declare const Radio: ({ options, title }: RadioProps) => JSX.Element;
export default Radio;
