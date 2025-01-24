
import AdminDashboard from "../../pages/admin/AdminDashboard";
import CreateAdmin from "../../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../../pages/admin/userManagement/CreateStudent";
import CreateDepartment from "../../pages/admin/academicManagement/CreateDepartment";
import CreateSemester from "../../pages/admin/academicManagement/CreateSemester";
import Department from "../../pages/admin/academicManagement/Department";
import Faculty from "../../pages/admin/academicManagement/Faculty";
import Semester from "../../pages/admin/academicManagement/Semester";
import StudentData from "../../pages/admin/userManagement/StudentData";
import StudentDetails from "../../pages/admin/userManagement/StudentDetails";


export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester",
        path: "academic-semester",
        element: <Semester />,
      },
      {
        name: "Create Semester",
        path: "create-academic-semester",
        element: <CreateSemester />,
      },
      {
        name: "Create Faculty",
        path: "create-academic-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Faculty",
        path: "academic-faculty",
        element: <Faculty />,
      },
      {
        name: "Create Department",
        path: "create-academic-department",
        element: <CreateDepartment />,
      },
      {
        name: "Department",
        path: "academic-department",
        element: <Department />,
      },
    ],
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
        name: "Students",
        path: "students-data",
        element: <StudentData />,
      },
      {
        path: "student-data/:studentId",
        element: <StudentDetails />,
      },
    ],
  },
];
