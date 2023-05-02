import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DropdownStory, DropDownProps } from "./Dropdown";

export default {
  title: "Atom/SingleSelect",
  component: DropdownStory,
  argTypes: {},
} as Meta;

const SingleSelect: Story<DropDownProps> = (args) => <DropdownStory {...args} />;

export const Dropdown = SingleSelect.bind({});
Dropdown.args = {
  options: [
    { value: "first", label: "First" },
    { value: "second", label: "Second" },
    { value: "third", label: "Third" },
    { value: "fourth", label: "Fourth" },
  ],
  value: null,
  placeHolder: "Select value",
};
