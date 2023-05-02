import React from "react";
import { Story, Meta } from "@storybook/react";
import { default as DataGridTableStory, DataGridTableProps } from "./DataGridTable";

export default {
    title: "Template/DataGridTable",
    component: DataGridTableStory,
    argTypes: {},
} as Meta;

const Template: Story<DataGridTableProps> = (args) => <DataGridTableStory {...args} />;

export const DataGridTable = Template.bind({});
DataGridTable.args = {
    columns: [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            width: "70px",
        },
        {
            name: 'Title',
            selector: (row: any) => row.title,
            sortable: true,
        },
        {
            name: 'Year',
            selector: (row: any) => row.year,
            sortable: true
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
        },
        {
            name: 'Status',
            selector: (row: any) => row.status,
        },
    ],
    data: [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
            status: 'Complete',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1999',
            status: 'Complete',
        },
        {
            id: 3,
            title: 'WhatIsThis',
            year: '1976',
            status: 'Complete',
        },
    ]
}


