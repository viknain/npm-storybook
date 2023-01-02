import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  default as DDButtonWithIcon,
  ButtonWithIconProps,
} from "../ButtonWithIcon/ButtonWithIcon";
import { ButtonCategoryTypes, ButtonSizes } from "../../componentTypes/Button";
import { DDIconsNames } from "../../componentTypes/Icon";

export default {
  title: "Button/IconButton",
  component: DDButtonWithIcon,
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
    iconPosition: {
      options: ["start", "end"],
      control: { type: "select" },
    },
    iconName: {
      options: Object.values(DDIconsNames),
      control: { type: "select" },
    },
  },
} as Meta;

const ButtonIcon: Story<ButtonWithIconProps> = (args) => (
  <DDButtonWithIcon {...args} />
);

export const IconButton = ButtonIcon.bind({});

IconButton.args = {
  category: ButtonCategoryTypes.primary,
  size: ButtonSizes.small,
  label: "Button",
  iconName: DDIconsNames.circleplus,
  iconPosition: "start",
};
