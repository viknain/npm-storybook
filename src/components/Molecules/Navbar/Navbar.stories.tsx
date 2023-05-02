import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as NavbarStory, NavbarProps } from "./Navbar";

export default {
    title: "Molecules/Navbar",
    component: NavbarStory,
    argTypes: {},
} as Meta;

const Template: Story<NavbarProps> = (args) => <NavbarStory {...args} />;

export const Navbar = Template.bind({});

Navbar.args = {
    menuItems: [
        {
            title: 'Uploading',
            path: "/upload",
        },
        {
            title: 'Catalog',
            path: "/catalog",
        },
        {
            title: 'Distribution',
            path: "/distribution",
        },
        {
            title: 'Reporting',
            path: "/reporting",
        },
    ]
};

