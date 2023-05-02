import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as MultiDropdownStory, DropDownProps } from "./MultiSelect";

export default {
    title: "Atom/MultiSelect",
    component: MultiDropdownStory,
    argTypes: {},
} as Meta;

const MultiSelect: Story<DropDownProps> = (args) => <MultiDropdownStory {...args} />;

export const Dropdown = MultiSelect.bind({});
Dropdown.args = {
    options: [
        { value: "first", label: "First" },
        { value: "second", label: "Second" },
        { value: "third", label: "Third" },
        { value: "fourth", label: "Fourth" },
        { value: "fifth", label: "Fifth" },
    ],
    value: null,
    placeHolder: "Select value",
};
