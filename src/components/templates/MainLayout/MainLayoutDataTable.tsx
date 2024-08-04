'use client';

import { DataTable, type DataTableRootProps } from '../../organisms/DataTable';

export function MainLayoutDataTable<T>(props: MainLayoutDataTableProps<T>) {
  return (
    <DataTable.Root {...props}>
      <DataTable.Content>
        <DataTable.Header />
        <DataTable.Body />
      </DataTable.Content>

      <DataTable.Pagination />
    </DataTable.Root>
  );
}

export interface MainLayoutDataTableProps<T> extends Omit<DataTableRootProps<T>, 'children'> {

}
