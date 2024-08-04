import type { CellContext } from '@tanstack/react-table';

export const getCellValue = <T>(info: CellContext<T, unknown>): string | number => {
  return String(info.getValue());
}
