import { Route, Routes } from "react-router";
import App from "../App";
import About from "../pages/shared/About";
import Contact from "../pages/shared/Contact";
import { adminPaths } from "./admin/AdminRoutes";
import { generateRoutes } from "../utilities/routeGenerator";
import { studentPaths } from "./student/StudentRoutes";
import ProtectedRoute from "../pages/shared/ProtectedRoute";
import Login from "../pages/shared/Login";
import Unauthorized from "../pages/shared/Unauthorized";
import MainLayout from "../components/layouts/MainLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
      <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]} >
        <MainLayout/>
      </ProtectedRoute>}>
        {generateRoutes(adminPaths)}
      </Route>

      <Route path="/student" element={<ProtectedRoute allowedRoles={['student']} >
        <MainLayout />
      </ProtectedRoute>}>
        {generateRoutes(studentPaths)}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
