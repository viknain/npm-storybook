import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as FooterStory, FooterProps, FooterYearOptions } from "./Footer";
import "./Footer.css";

export default {
    title: "Molecules/Footer",
    component: FooterStory,
    argTypes: {
        yearOptions: {
            options: [
                "fixed",
                "currentYear",
            ],
            control: { type: "select" },
        }
    },
} as Meta;

const Template: Story<FooterProps> = (args) => <FooterStory {...args} />;

export const Footer = Template.bind({});

Footer.args = {
    copyRightLbl: "Copyright @ MobilityWare ",
    backGroundColor: "",
    yearOptions: FooterYearOptions.fixed,
    year: "2022"
};