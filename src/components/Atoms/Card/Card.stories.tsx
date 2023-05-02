import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as CardStory, CardProps } from "./Card";

let imgUrl = require("../../../assets/images/download.jpg")

export default {
    title: "Atom/Card",
    component: CardStory,
    argTypes: {},
} as Meta;

const Template: Story<CardProps> = (args) => <CardStory {...args} />;

export const Card = Template.bind({});
Card.args = {
    imgUrl: imgUrl,
    title: "Monopoly Solitaire Android",
    subTitle: "ChanceCardDilemma-Fail-Variant",
    data: [
        {
            key: "IPM",
            value: "4.53"
        },
        {
            key: "CPI",
            value: "3.28"
        },
        {
            key: "Installs",
            value: "11,338"
        },
        {
            key: "Spend",
            value: "37,148.5"
        },
        {
            key: "Primary Network",
            value: "Unity"
        },
    ]
};