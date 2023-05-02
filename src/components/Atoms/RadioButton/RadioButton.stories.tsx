import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as RadioButtonStory, RadioButtonProps } from "./RadioButton";

export default {
    title: "Atom/RadioButton",
    component: RadioButtonStory,
    argTypes: {},
} as Meta;

const Template: Story<RadioButtonProps> = (args) => <RadioButtonStory {...args} />;

export const RadioButton = Template.bind({});
RadioButton.args = {
    label: "Radio",
    onChange: () => {},
};