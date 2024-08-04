import { DataTableRoot, type DataTableRootProps } from './DataTableRoot';
import { DataTableContent, type DataTableContentProps } from './DataTableContent';
import { DataTableHeader, type DataTableHeaderProps } from './DataTableHeader';
import { DataTableBody, type DataTableBodyProps } from './DataTableBody';
import { DataTablePagination, type DataTablePaginationProps } from './DataTablePagination';

export const DataTable = {
  Root: DataTableRoot,
  Content: DataTableContent,
  Header: DataTableHeader,
  Body: DataTableBody,
  Pagination: DataTablePagination,
};

export type {
  DataTableRootProps,
  DataTableContentProps,
  DataTableHeaderProps,
  DataTableBodyProps,
  DataTablePaginationProps,
};

export * from './utils';
