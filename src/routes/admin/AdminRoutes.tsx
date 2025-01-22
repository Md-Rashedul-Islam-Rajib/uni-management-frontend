
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminLogin from "../../pages/admin/AdminLogin";
import CreateAdmin from "../../pages/admin/CreateAdmin";
import CreateFaculty from "../../pages/admin/CreateFaculty";
import CreateStudent from "../../pages/admin/CreateStudent";
import CreateDepartment from "../../pages/admin/academicManagement/CreateDepartment";
import CreateSemester from "../../pages/admin/academicManagement/CreateSemester";
import Department from "../../pages/admin/academicManagement/Department";
import Faculty from "../../pages/admin/academicManagement/Faculty";
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
      {
        name: "Faculty",
        path: 'academic-faculty',
        element: <Faculty/>
      },
      {
        name: "Create Department",
        path: 'create-academic-department',
        element: <CreateDepartment/>
      },
      {
        name: "Department",
        path: 'academic-department',
        element: <Department/>
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
