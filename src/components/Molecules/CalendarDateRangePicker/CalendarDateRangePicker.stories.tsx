import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as CalendarDateRangePickerStory, CalendarDateRangePickerProps } from "./CalendarDateRangePicker";
import { subDays } from "date-fns";

export default {
    title: "Molecules/CalendarDateRangePicker",
    component: CalendarDateRangePickerStory,
    argTypes: {},
} as Meta;

const Template: Story<CalendarDateRangePickerProps> = (args) => <CalendarDateRangePickerStory {...args} />;

export const CalendarDateRangePicker = Template.bind({});
CalendarDateRangePicker.args = {
    createdDate: [
        {
            startDate: subDays(new Date(), 30),
            endDate: new Date()
        }
    ],
    onChange: () => {}
};