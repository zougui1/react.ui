'use client';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type {
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogPortalProps,
} from '@radix-ui/react-alert-dialog';

import { AlertDialogOverlay, type AlertDialogOverlayProps } from './AlertDialogOverlay';
import { AlertDialogContent, type AlertDialogContentProps } from './AlertDialogContent';
import { AlertDialogHeader, type AlertDialogHeaderProps } from './AlertDialogHeader';
import { AlertDialogFooter, type AlertDialogFooterProps } from './AlertDialogFooter';
import { AlertDialogTitle, type AlertDialogTitleProps } from './AlertDialogTitle';
import { AlertDialogDescription, type AlertDialogDescriptionProps } from './AlertDialogDescription';
import { AlertDialogAction, type AlertDialogActionProps } from './AlertDialogAction';
import { AlertDialogCancel, type AlertDialogCancelProps } from './AlertDialogCancel';

export const AlertDialog = {
  Root: AlertDialogPrimitive.Root,
  Trigger: AlertDialogPrimitive.Trigger,
  Portal: AlertDialogPrimitive.Portal,
  Overlay: AlertDialogOverlay,
  Content: AlertDialogContent,
  Header: AlertDialogHeader,
  Footer: AlertDialogFooter,
  Title: AlertDialogTitle,
  Description: AlertDialogDescription,
  Action: AlertDialogAction,
  Cancel: AlertDialogCancel,
};

export type {
  AlertDialogProps as AlertDialogRootProps,
  AlertDialogTriggerProps,
  AlertDialogPortalProps,
  AlertDialogOverlayProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogFooterProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
};
