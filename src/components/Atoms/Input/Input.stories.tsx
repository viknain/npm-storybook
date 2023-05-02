import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as InputStory, InputProps, InputTypes, InputSizes, InputCategories } from "./Input";

export default {
  title: "Atom/Input",
  component: InputStory,
  argTypes: {
    type: {
      options: [
        "text",
        "password",
        "number",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    variant: {
      options: ["filled", "outlined"],
      control: { type: "select" },
    },
  },
} as Meta;

const InputNormal: Story<InputProps> = (args) => <InputStory {...args} />;

export const Input = InputNormal.bind({});
Input.args = {
  placeHolder: "place holder",
  type: InputTypes.text,
  size: InputSizes.small,
  errorMessage: "",
  label: "Label",
  variant: InputCategories.outlined
};