import { Layout, Menu } from "antd";
import { menuGenerator } from "../../utilities/sidebarMenuGenerator";
import { adminPaths } from "../../routes/admin/AdminRoutes";
import { facultyPaths } from "../../routes/faculty/FacultyRoutes";
import { studentPaths } from "../../routes/student/StudentRoutes";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";

const {  Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {

  const user = useSelector(useCurrentUser);

   let sidebarItems;

   switch (user?.role) {
     case userRole.ADMIN:
       sidebarItems = menuGenerator(adminPaths, userRole.ADMIN);
       break;
     case userRole.FACULTY:
       sidebarItems = menuGenerator(facultyPaths, userRole.FACULTY);
       break;
     case userRole.STUDENT:
       sidebarItems = menuGenerator(studentPaths, userRole.STUDENT);
       break;

     default:
       break;
   }


  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          color: "white",
          height: "4 rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>GU</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
}

export default Sidebar
