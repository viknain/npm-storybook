import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as CheckboxStory, CheckboxProps } from "./Checkbox";

export default {
    title: "Atom/Checkbox",
    component: CheckboxStory,
    argTypes: {},
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CheckboxStory {...args} />;

export const Checkbox = Template.bind({});

Checkbox.args = {
    label: "Checking",
    onChange: () => { }
};

