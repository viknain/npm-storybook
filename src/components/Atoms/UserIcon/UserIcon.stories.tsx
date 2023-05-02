import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as UserIconStory, UserIconProps } from "./UserIcon"
import { IconsNames } from "../Icon/Icon";

export default {
    title: "Atom/UserIcon",
    component: UserIconStory,
    argTypes: {
    },
} as Meta

const Template: Story<UserIconProps> = (args) => <UserIconStory {...args} />;

export const UserIcon = Template.bind({});
UserIcon.args = {
    iconName: IconsNames.userIcon,
    onClick: () => { }
};
