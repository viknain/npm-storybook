import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as InputWithIconStory, InputWithIconProps } from "./InputWithIcon";
import { InputCategories, InputSizes } from "../../Atoms/Input/Input";
import { IconsNames } from "../../Atoms/Icon/Icon";

export default {
  title: "Molecules/InputWithIcon",
  component: InputWithIconStory,
  argTypes: {
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

const Template: Story<InputWithIconProps> = (args) => <InputWithIconStory {...args} />;

export const IconInput = Template.bind({});
IconInput.args = {
  placeHolder: "Place holder",
  iconName: IconsNames.closeEye,
  errorMessage: "",
  size: InputSizes.small,
  variant: InputCategories.outlined
};
