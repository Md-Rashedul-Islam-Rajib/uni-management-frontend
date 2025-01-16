import { ReactNode } from "react";
import { NavLink } from "react-router";

type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

type TRoutePaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutePaths[];
};

export const menuGenerator = (path: TRoutePaths[], role: string) => {
  const routes = path.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return routes;
};
