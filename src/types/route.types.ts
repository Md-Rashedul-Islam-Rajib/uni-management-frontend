import { ReactNode } from "react";

export type TRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoute[];
};

export type PrivateRoute = {
  allowedRoles?: string[];
};

export type User = {
  id: string;
  role: string;
};