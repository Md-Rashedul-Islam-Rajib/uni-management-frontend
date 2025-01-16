import { Layout, Menu } from "antd";
import { menuGenerator } from "../../utilities/sidebarMenuGenerator";
import { adminPaths } from "../../routes/admin/AdminRoutes";
import { facultyPaths } from "../../routes/faculty/FacultyRoutes";
import { studentPaths } from "../../routes/student/StudentRoutes";

const {  Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {

   const role = "admin";
   let sidebarItems;

   switch (role) {
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
