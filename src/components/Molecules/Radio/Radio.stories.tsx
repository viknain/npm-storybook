import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as RadioStory, RadioProps } from "./Radio";

export default {
    title: "Molecules/Radio",
    component: RadioStory,
    argTypes: {},
} as Meta;

const Template: Story<RadioProps> = (args) => <RadioStory {...args} />;

export const Radio = Template.bind({});
Radio.args = {
    title: "Platform",
    options: [
        {
            label: "All",
            value: "1, 2",
        },
        {
            label: "Android",
            value: "1",
        },
        {
            label: "iOS",
            value: "2",
        },
    ]
};