import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as TraditionalToolTipStory, TraditionalToolTipProps, TraditionalToolTipPosition } from "./TraditionalToolTip";

export default {
  title: "Atom/TraditionalToolTip",
  component: TraditionalToolTipStory,
  argTypes: {},
} as Meta;

const TraditionalToolTip: Story<TraditionalToolTipProps> = (args) => <TraditionalToolTipStory {...args} />;

export const ToolTip = TraditionalToolTip.bind({});
ToolTip.args = {
  title: "Some text indicating information to the user...",
  children: <p className="tooltiptext">Test Tooltip</p>,
  position: TraditionalToolTipPosition.right
};
