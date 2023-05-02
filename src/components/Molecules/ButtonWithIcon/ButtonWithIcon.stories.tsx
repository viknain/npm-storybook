import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as ButtonWithIconStory, ButtonWithIconProps } from "./ButtonWithIcon";
import { IconsNames } from "../../Atoms/Icon/Icon";
import { ButtonCategoryTypes, ButtonSizes } from "../../Atoms/Button/Button";

export default {
  title: 'Molecules/IconButton',
  component: ButtonWithIconStory,
  argTypes: {
      variant: {
          options: ['primary', 'secondary', 'outlined'],
          control: { type: 'select' },
      },
      size: {
          options: ['small', 'medium', 'large'],
          control: { type: 'select' },
      },
      iconPosition: {
          options: ['start', 'end'],
          control: { type: 'select' },
      },
      iconName: {
          options: Object.values(IconsNames),
          control: { type: 'select' },
      },
      disabled: {
          control: { type: 'boolean' },
      },
      onClick: {
          control: 'onClick',
      },
  },
} as Meta;

const ButtonIcon: Story<ButtonWithIconProps> = (args) => <ButtonWithIconStory {...args} />;

export const IconButton = ButtonIcon.bind({});

IconButton.args = {
  variant: ButtonCategoryTypes.primary,
  size: ButtonSizes.small,
  label: 'Button',
  iconName: IconsNames.circleplus,
  iconPosition: 'start',
  disabled: false,
  onClick: () => {},
};
