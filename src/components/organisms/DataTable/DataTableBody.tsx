import { flexRender } from '@tanstack/react-table';

import { useDataTable } from './context';
import { Table } from '../../molecules/Table';

export const DataTableBody = () => {
  const table = useDataTable();
  const { rows } = table.getRowModel();

  if (!rows.length) {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell
            colSpan={table.getAllColumns().length}
            className="h-24 text-center"
          >
            No results.
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }

  return (
    <Table.Body>
      {rows.map((row) => (
        <Table.Row key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Table.Cell key={cell.id}>
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  );
}

export interface DataTableBodyProps {
  children?: React.ReactNode;
}
