// import { ReactNode } from "react";
// type TSidebarPath = {
//     name: string;
//     path: string;
//     children: TSidebarPath[]
// }

// type TSidebarMenu = {
//     key: string;
//     label: ReactNode;
//     children?: TSidebarMenu[];
// }


// export const sidebarMenuGenerator = (paths: TSidebarPath[]): TSidebarMenu[] => {
//   return paths.reduce<TSidebarMenu[]>((acc, item) => {
//     const menuItem: TSidebarMenu = {
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     };

//     // If there are children, generate their menus recursively
//     if (item.children && item.children.length > 0) {
//       menuItem.children = sidebarMenuGenerator(item.children);
//     }

//     acc.push(menuItem);
//     return acc;
//   }, []);
// };