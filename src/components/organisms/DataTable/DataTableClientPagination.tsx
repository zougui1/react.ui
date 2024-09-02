'use client';

import { useDataTable } from './context';
import { DataTablePagination } from './DataTablePagination';

export const DataTableClientPagination = () => {
  const table = useDataTable();

  return (
    <DataTablePagination.Root>
      <DataTablePagination.Content>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of{' '}
          {table.getPageCount().toLocaleString()}
        </span>

        <DataTablePagination.Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </DataTablePagination.Button>
        <DataTablePagination.Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </DataTablePagination.Button>
      </DataTablePagination.Content>
    </DataTablePagination.Root>
  );
}

export interface DataTableClientPaginationProps {
  children?: React.ReactNode;
}
