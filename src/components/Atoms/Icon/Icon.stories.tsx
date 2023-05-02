import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as IconStory, IconProps, IconsNames } from "../Icon/Icon";

export default {
  title: "Atom/Icon",
  component: IconStory,
  argTypes: {},
} as Meta;

const Template: Story<IconProps> = (args) => <IconStory {...args} />;

export const Icon = Template.bind({});
Icon.args = {
  iconName: IconsNames.circleplus,
};
