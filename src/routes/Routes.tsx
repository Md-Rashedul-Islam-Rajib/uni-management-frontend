import { Route, Routes } from "react-router";
import App from "../App";
import About from "../pages/shared/About";
import Contact from "../pages/shared/Contact";
import { adminPaths } from "./admin/AdminRoutes";
import { generateRoutes } from "../utilities/routeGenerator";
import { studentPaths } from "./student/StudentRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<App />}>
        {generateRoutes(adminPaths)}
      </Route>

      <Route path="/student" element={<App />}>
        {generateRoutes(studentPaths)}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
