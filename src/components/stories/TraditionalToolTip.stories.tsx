import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DDTraditionalToolTip, TraditionalToolTipProps } from "../TraditionalToolTip/TraditionalToolTip";
import { DDTraditionalToolTipPosition } from "../../componentTypes/Tooltip";

export default {
  title: "TraditionalToolTip/TraditionalToolTip",
  component: DDTraditionalToolTip,
  argTypes: {
  },
} as Meta;

const TraditionalToolTip: Story<TraditionalToolTipProps> = (args) => <DDTraditionalToolTip {...args} />;

export const ToolTip = TraditionalToolTip.bind({});
ToolTip.args = {
  title: "Some text indicating information to the user...",
  children: <p className="tooltiptext">Test Tooltip</p>,
  position: DDTraditionalToolTipPosition.right
};
