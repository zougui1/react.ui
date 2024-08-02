'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import type {
  DialogProps,
  DialogTriggerProps,
  DialogPortalProps,
  DialogCloseProps,
} from '@radix-ui/react-dialog';

import { DialogBody, type DialogBodyProps } from './DialogBody';
import { DialogContent, type DialogContentProps } from './DialogContent';
import { DialogDescription, type DialogDescriptionProps } from './DialogDescription';
import { DialogFooter, type DialogFooterProps } from './DialogFooter';
import { DialogHeader, type DialogHeaderProps } from './DialogHeader';
import { DialogOverlay, type DialogOverlayProps } from './DialogOverlay';
import { DialogTitle, type DialogTitleProps } from './DialogTitle';

export const Dialog = {
  Root: DialogPrimitive.Root,
  Trigger: DialogPrimitive.Trigger,
  Portal: DialogPrimitive.Portal,
  Close: DialogPrimitive.Close,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Body: DialogBody,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: DialogTitle,
  Description: DialogDescription,
};

export type {
  DialogProps as DialogRootProps,
  DialogTriggerProps as DialogTriggerProps,
  DialogPortalProps as DialogPortalProps,
  DialogCloseProps as DialogCloseProps,
  DialogBodyProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogFooterProps,
  DialogHeaderProps,
  DialogOverlayProps,
  DialogTitleProps,
};
