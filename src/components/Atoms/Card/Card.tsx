import React from 'react'
import "./Card.css";

export interface CardProps {
    imgUrl: string
    title: string
    subTitle: string
    data: any[]
}

const Card = ({ imgUrl, title, subTitle, data }: CardProps) => {
    return (
        <div className="mainCard" >
            <img src={imgUrl} alt={title} />
            <div className="cardHeader">
                <h4>{title}</h4>
                <h4>{subTitle}</h4>
            </div>
            <div className="cardBody">
                {data?.map((item: any) => {
                    return <div className="cardContent" key={item?.key}>
                        <h6>{item?.key}</h6>
                        <p>{item?.value}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card                                                                 