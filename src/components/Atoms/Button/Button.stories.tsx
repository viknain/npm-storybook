import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as ButtonStory, ButtonProps, ButtonCategoryTypes, ButtonSizes } from "./Button";

export default {
  title: "Atom/Button",
  component: ButtonStory,
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "outlined",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <ButtonStory {...args} />;

export const Button = Template.bind({});

Button.args = {
  variant: ButtonCategoryTypes.primary,
  size: ButtonSizes.small,
  label: "Button",
};

