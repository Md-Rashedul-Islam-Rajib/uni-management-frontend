
import AdminDashboard from "../../pages/admin/AdminDashboard";
import CreateAdmin from "../../pages/admin/CreateAdmin";
import CreateFaculty from "../../pages/admin/CreateFaculty";
import CreateStudent from "../../pages/admin/CreateStudent";



export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

// export const adminSidebarItems = adminPaths.reduce((acc: TSidebarItem[], item) => {
//   if (item.path && item.name) {
//     acc.push({
//       key: item.name,
//       label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//       })),
//     });
//   }

//   return acc;
// }, []);

// export const generateRoutes = (paths: TRoute[]): ReactNode => {
//   return paths.map((item) => {
//     if (item.children) {
//       return (
//         <Route key={item?.name} path={item?.path}>
//           {item?.element && <Route index element={item?.element} />}
//           {generateRoutes(item.children)}
//         </Route>
//       );
//     }

//      return (
//        item?.path && (
//          <Route key={item.name} path={item.path} element={item.element} />
//        )
//      );
//   });
// };