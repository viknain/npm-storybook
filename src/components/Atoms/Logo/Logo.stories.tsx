import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as NavbarLogoStory, NavbarLogoProps } from "./Logo";

// let logoUrl = require('../../../assets/images/logo.png');
let logoUrl = require('../../../assets/images/logo.png');

export default {
    title: "Atom/NavbarLogo",
    component: NavbarLogoStory,
    argTypes: {
    },
} as Meta;

const Template: Story<NavbarLogoProps> = (args) => <NavbarLogoStory {...args} />;

export const NavbarLogo = Template.bind({});
NavbarLogo.args = {
    imageUrl: logoUrl,
    alt: "Logo",
};
