/// <reference types="react" />
import "./DataGridTable.css";
export interface DataGridTableProps {
    columns: any[];
    data: any[];
    className?: string;
    striped?: boolean;
    pagination?: boolean;
    paginationTotalRows?: number;
    paginationServer?: boolean;
    paginationPerPage?: number;
    pointerOnHover?: boolean;
    sortServer?: boolean;
    onChangePage?: (page?: any, totalRows?: number) => void;
    onChangeRowsPerPage?: (currentRowsPerPage?: number, currentPage?: any) => void;
    onRowClicked?: (any?: number, event?: any) => void;
    onSort?: (selectedColumn?: any, sortDirection?: any, sortedRows?: any) => void;
}
declare const DataGridTable: ({ columns, data, className, striped, pagination, paginationServer, paginationTotalRows, paginationPerPage, onChangePage, onChangeRowsPerPage, pointerOnHover, onRowClicked, sortServer, onSort, ...rest }: DataGridTableProps) => JSX.Element;
export default DataGridTable;
