
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminLogin from "../../pages/admin/AdminLogin";
import CreateAdmin from "../../pages/admin/CreateAdmin";
import CreateFaculty from "../../pages/admin/CreateFaculty";
import CreateStudent from "../../pages/admin/CreateStudent";
import CreateSemester from "../../pages/admin/academicManagement/CreateSemester";
import Semester from "../../pages/admin/academicManagement/Semester";


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: 'Course Management',
    children: [
      {
        name: "Semester",
        path: 'academic-semester',
        element: <Semester/>
      },
      {
        name: "Create Semester",
        path: 'create-academic-semester',
        element: <CreateSemester/>
      },
      {
        name: "Create Faculty",
        path: 'create-academic-faculty',
        element: <CreateFaculty/>
      },
    ]
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
      {
        name: "Login",
        path: "login",
        element: <AdminLogin />,
      },
    ],
  },
];
