import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DDInput, InputProps } from "../Input/Input";
import { DDInputCategoryTypes, DDInputTypes } from "../../componentTypes/Input";

export default {
  title: "Input/Input",
  component: DDInput,
  argTypes: {
    category: {
      options: [
        "tertiarygray",
        "tertiaryred",
        "tertiaryteal",
      ],
      control: { type: "select" },
    },
  },

} as Meta;

const InpitNormal: Story<InputProps> = (args) => <DDInput {...args} />;

export const Input = InpitNormal.bind({});
Input.args = {
  category: DDInputCategoryTypes.tertiarygray,
  placeHolder: "place holder",
  type: DDInputTypes.text,
  value: "Button",
  errorMessage: ""
};
