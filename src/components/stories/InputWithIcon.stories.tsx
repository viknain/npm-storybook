import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DDInputWithIcon, InputWithIconProps } from "../InputWithIcon/InputWithIcon";
import { DDInputCategoryTypes, DDInputTypes } from "../../componentTypes/Input";
import { DDIconsNames } from "../../componentTypes/Icon";

export default {
  title: "Input/InputWithIcon",
  component: DDInputWithIcon,
  argTypes: {  category: {
    options: [
      "tertiarygray",
      "tertiaryred",
      "tertiaryteal",
    ],
    control: { type: "select" },
  },},
} as Meta;

const InpitWithicon: Story<InputWithIconProps> = (args) => <DDInputWithIcon {...args} />;

export const IconInput = InpitWithicon.bind({});
IconInput.args = {
  category: DDInputCategoryTypes.tertiarygray,
  placeHolder: "place holder",
  type: DDInputTypes.text,
  value: "",
  iconName: DDIconsNames.closeEye,
  errorMessage: ""
};
