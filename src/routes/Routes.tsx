import { Route, Routes } from "react-router";
import App from "../App";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<App />}>
              <Route path="about" element={<About /> } />
          </Route>
    </Routes>
  );
};

export default AppRoutes;
