import { MainLayoutBody, type MainLayoutBodyProps } from './MainLayoutBody';
import { MainLayoutContainer, type MainLayoutContainerProps } from './MainLayoutContainer';
import { MainLayoutScreen, type MainLayoutScreenProps } from './MainLayoutScreen';
import { MainLayoutSidePanel, type MainLayoutSidePanelProps } from './MainLayoutSidePanel';

export const MainLayout = {
  Body: MainLayoutBody,
  Container: MainLayoutContainer,
  Screen: MainLayoutScreen,
  SidePanel: MainLayoutSidePanel,
};

export type {
  MainLayoutBodyProps,
  MainLayoutContainerProps,
  MainLayoutScreenProps,
  MainLayoutSidePanelProps,
};
