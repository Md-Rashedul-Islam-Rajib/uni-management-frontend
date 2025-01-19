import Login from "../../pages/shared/Login";
import StudentDashboard from "../../pages/student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
];
