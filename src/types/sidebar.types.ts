import { ReactNode } from "react";

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
} | undefined;

export type TRoutePaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutePaths[];
};
