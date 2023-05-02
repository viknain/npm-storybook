import classNames from 'classnames';
import React from 'react'
import DataTable from "react-data-table-component";
import "./DataGridTable.css";
import SortIcon from '../../Atoms/SortIcon/SortIcon';

export interface DataGridTableProps {
    columns: any[]
    data: any[]
    className?: string
    striped?: boolean
    pagination?: boolean
    paginationTotalRows?: number
    paginationServer?: boolean
    paginationPerPage?: number
    pointerOnHover?: boolean
    sortServer?: boolean
    onChangePage?: (page?: any, totalRows?: number) => void
    onChangeRowsPerPage?: (currentRowsPerPage?: number, currentPage?: any) => void
    onRowClicked?: (any?: number, event?: any) => void
    onSort?: (selectedColumn?: any, sortDirection?: any, sortedRows?: any) => void
}

const DataGridTable = ({ columns, data, className, striped, pagination=true, paginationServer, paginationTotalRows, paginationPerPage, onChangePage, onChangeRowsPerPage, pointerOnHover, onRowClicked, sortServer, onSort, ...rest }: DataGridTableProps) => {

    return (
        <div className={classNames("tableContainer")}>
            <DataTable
                title="Files To Upload"
                columns={columns}
                data={data}
                className={classNames("tableContent", `${className}`)}
                sortIcon={<SortIcon />}
                responsive={true}
                striped={striped}
                pagination={pagination}
                paginationServer={paginationServer}
                paginationTotalRows={paginationTotalRows}
                paginationPerPage={paginationPerPage}
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
                pointerOnHover={pointerOnHover}
                onRowClicked={onRowClicked}
                sortServer={sortServer}
                onSort={onSort}
                {...rest}
            />
        </div>
    )
}

export default DataGridTable