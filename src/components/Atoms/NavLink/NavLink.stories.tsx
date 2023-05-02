import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as NavLinkStory, NavLinkProps } from "./NavLink";

export default {
    title: "Atom/NavLink",
    component: NavLinkStory,
    argTypes: {},
} as Meta;

const Template: Story<NavLinkProps> = (args) => <NavLinkStory {...args} />;

export const NavLink = Template.bind({});

NavLink.args = {
    name: "Test",
    path: "#"
};

