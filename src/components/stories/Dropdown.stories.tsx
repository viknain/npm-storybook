import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DDDropdown, DropDownProps } from "../Dropdown/Dropdown";

export default {
  title: "Dropdown/SingleSelect",
  component: DDDropdown,
  argTypes: {},
} as Meta;

const SingleSelect: Story<DropDownProps> = (args) => <DDDropdown {...args} />;

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
