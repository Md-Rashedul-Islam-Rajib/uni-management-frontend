import { Route, Routes } from "react-router";
import App from "../App";
import About from "../pages/shared/About";
import Contact from "../pages/shared/Contact";

const AppRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<App />}>
              <Route path="about" element={<About /> } />
              <Route path="contact" element={<Contact /> } />
          </Route>
    </Routes>
  );
};

export default AppRoutes;
