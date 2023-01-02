import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DDIcon, IconProps } from "../Icon/Icon";
import { DDIconsNames } from "../../componentTypes/Icon";

export default {
  title: "Icon/Icon",
  component: DDIcon,
  argTypes: {},
} as Meta;

const Template: Story<IconProps> = (args) => <DDIcon {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  iconName: DDIconsNames.circleplus,
};
