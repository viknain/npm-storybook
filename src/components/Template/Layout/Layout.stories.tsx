import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as AuthLayoutStory } from "./Layout";
import Button, { ButtonCategoryTypes, ButtonSizes } from "../../Atoms/Button/Button";

export default {
    title: "Template/AuthLayout",
    component: AuthLayoutStory,
    argTypes: {
    },
} as Meta;

const Template: Story<any> = (args) => <AuthLayoutStory {...args} ><Button variant={ButtonCategoryTypes.primary} size={ButtonSizes.large} label="Children"></Button></AuthLayoutStory>;

export const AuthLayout = Template.bind({});
AuthLayout.args = {
    userInfo: {
        userName: "string",
        email: "string",
        profileImage: "string"
    },
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
    