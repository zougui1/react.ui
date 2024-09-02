'use client';

import { DataTableRoot, type DataTableRootProps } from './DataTableRoot';
import { DataTableContent, type DataTableContentProps } from './DataTableContent';
import { DataTableHeader, type DataTableHeaderProps } from './DataTableHeader';
import { DataTableBody, type DataTableBodyProps } from './DataTableBody';
import {
  DataTablePagination,
  type DataTablePaginationButtonProps,
  type DataTablePaginationContentProps,
  type DataTablePaginationRootProps,
} from './DataTablePagination';
import { DataTableClientPagination, type DataTableClientPaginationProps } from './DataTableClientPagination';
import { createSortedHead, getCellArrayLength, getCellValue } from './utils';

export const DataTable = {
  Root: DataTableRoot,
  Content: DataTableContent,
  Header: DataTableHeader,
  Body: DataTableBody,
  Pagination: DataTablePagination,
  ClientPagination: DataTableClientPagination,
};

export type {
  DataTableRootProps,
  DataTableContentProps,
  DataTableHeaderProps,
  DataTableBodyProps,
  DataTableClientPaginationProps,
  DataTablePaginationButtonProps,
  DataTablePaginationContentProps,
  DataTablePaginationRootProps,
};

export { createSortedHead, getCellArrayLength, getCellValue };
