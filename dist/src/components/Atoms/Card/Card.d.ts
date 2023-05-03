/// <reference types="react" />
import "./Card.css";
export interface CardProps {
    imgUrl: string;
    title: string;
    subTitle: string;
    data: any[];
}
declare const Card: ({ imgUrl, title, subTitle, data }: CardProps) => JSX.Element;
export default Card;
