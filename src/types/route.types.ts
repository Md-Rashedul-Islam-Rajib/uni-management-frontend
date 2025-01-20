import { ReactNode } from "react";

export type TRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoute[];
};



export type User = {
  userId: string;
  role: string;
  iat: number;
  exp: number
};

export type PrivateRoute = {
  allowedRoles: string[];
  children: React.ReactNode; 
};