import { DataTablePaginationRoot, type DataTablePaginationRootProps } from './DataTablePaginationRoot';
import { DataTablePaginationContent, type DataTablePaginationContentProps } from './DataTablePaginationContent';
import { DataTablePaginationButton, type DataTablePaginationButtonProps } from './DataTablePaginationButton';


export const DataTablePagination = {
  Root: DataTablePaginationRoot,
  Content: DataTablePaginationContent,
  Button: DataTablePaginationButton,
};

export type {
  DataTablePaginationRootProps,
  DataTablePaginationContentProps,
  DataTablePaginationButtonProps,
};
