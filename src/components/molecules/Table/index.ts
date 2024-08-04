import { TableBody, type TableBodyProps } from './TableBody';
import { TableCaption, type TableCaptionProps } from './TableCaption';
import { TableCell, type TableCellProps } from './TableCell';
import { TableFooter, type TableFooterProps } from './TableFooter';
import { TableHead, type TableHeadProps } from './TableHead';
import { TableHeader, type TableHeaderProps } from './TableHeader';
import { TableRoot, type TableRootProps } from './TableRoot';
import { TableRow, type TableRowProps } from './TableRow';

export const Table = {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Footer: TableFooter,
  Head: TableHead,
  Header: TableHeader,
  Root: TableRoot,
  Row: TableRow,
};

export type {
  TableBodyProps,
  TableCaptionProps,
  TableCellProps,
  TableFooterProps,
  TableHeadProps,
  TableHeaderProps,
  TableRootProps,
  TableRowProps,
};
