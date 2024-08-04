import { flexRender } from '@tanstack/react-table';

import { useDataTable } from './context';
import { Table } from '../../molecules/Table';

export const DataTableHeader = () => {
  const table = useDataTable();

  return (
    <Table.Header>
      {table.getHeaderGroups().map((headerGroup) => (
        <Table.Row key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <Table.Head key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                  )
                }
              </Table.Head>
            )
          })}
        </Table.Row>
      ))}
    </Table.Header>
  );
}

export interface DataTableHeaderProps {
  children?: React.ReactNode;
}
