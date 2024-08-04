import type { CellContext } from '@tanstack/react-table';

export const getCellArrayLength = <T>(info: CellContext<T, unknown>): string | number => {
  const data = info.getValue();
  return Array.isArray(data) ? data.length : 0;
}
