import { Layout, Menu} from "antd";
import {
  // UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";

import { Outlet } from "react-router";
import { adminPaths } from "../../routes/admin/AdminRoutes";
import { menuGenerator } from "../../utilities/sidebarMenuGenerator";



const { Header, Content, Footer, Sider } = Layout;



const userRole = 'admin';

const MainLayout = () => {
  return (
    <Layout className="h-[100%]" style={{height: '100vh'}}>
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
              <div style={{ color: 'white', height: '4 rem', justifyContent:'center',alignItems:'center'}} >
                  <h1>GU</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={menuGenerator(adminPaths,userRole)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
