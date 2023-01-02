import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DDButton, ButtonProps } from "../Button/Button";
import { ButtonCategoryTypes, ButtonSizes } from "../../componentTypes/Button";

export default {
  title: "Button/Button",
  component: DDButton,
  argTypes: {
    category: {
      options: [
        "primary",
        "secondary",
        "tertiarygray",
        "tertiarypink",
        "tertiaryteal",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const ButtonNormal: Story<ButtonProps> = (args) => <DDButton {...args} />;

export const Button = ButtonNormal.bind({});
Button.args = {
  category: ButtonCategoryTypes.primary,
  size: ButtonSizes.small,
  label: "Button",
};
