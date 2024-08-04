import { MainLayoutBody, type MainLayoutBodyProps } from './MainLayoutBody';
import { MainLayoutContainer, type MainLayoutContainerProps } from './MainLayoutContainer';
import { MainLayoutDataTable, type MainLayoutDataTableProps } from './MainLayoutDataTable';
import { MainLayoutScreen, type MainLayoutScreenProps } from './MainLayoutScreen';
import { MainLayoutSidePanel, type MainLayoutSidePanelProps } from './MainLayoutSidePanel';

export const MainLayout = {
  Body: MainLayoutBody,
  Container: MainLayoutContainer,
  DataTable: MainLayoutDataTable,
  Screen: MainLayoutScreen,
  SidePanel: MainLayoutSidePanel,
};

export type {
  MainLayoutBodyProps,
  MainLayoutContainerProps,
  MainLayoutDataTableProps,
  MainLayoutScreenProps,
  MainLayoutSidePanelProps,
};
