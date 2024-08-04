'use client';

import { createContext, useContext, useState, useMemo } from 'react';

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type Table,
  type ColumnDef,
  type SortingState,
  type PaginationState,
} from '@tanstack/react-table';

export type DataTableContextState = Table<unknown>;

export const DataTableContext = createContext<DataTableContextState | undefined>(undefined);

export function DataTableProvider<T>({ children, data, columns }: DataTableProviderProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable<unknown>({
    data,
    columns: columns as ColumnDef<unknown>[],
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      sorting,
      pagination,
    },
  });

  // since a table state change (sorting change)
  // doesn't cause tanstack table
  // to create a new table object
  // it has to be done manually
  // otherwise sub-components won't re-render on state change
  // which will break some table features (like sorting)
  const renderPatchTable = useMemo(() => {
    return { ...table };
    // the exhaustive deps warns on this like because
    // 'sorting' and 'pagination' aren't detected as necessary
    // but they are important, they are meant to cause the
    // whole table and its sub-components to rerender
    // when those values change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, sorting, pagination]);

  return (
    <DataTableContext.Provider value={renderPatchTable}>
      {children}
    </DataTableContext.Provider>
  );
}

export interface DataTableProviderProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  children?: React.ReactNode;
}

export const useDataTable = (): DataTableContextState => {
  const context = useContext(DataTableContext);

  if (!context) {
    throw new Error('Cannot use table outside of the TableProvider tree');
  }

  return context;
}
