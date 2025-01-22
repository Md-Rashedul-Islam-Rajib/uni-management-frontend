import { Button, Layout} from "antd";
import {
  // UploadOutlined,
  // UserOutlined,
  // VideoCameraOutlined,
} from "@ant-design/icons";

import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";
const { Header, Content, Footer } = Layout;





const MainLayout = () => {

  const dispatch = useAppDispatch();
  return (
    <Layout style={{height: '100vh'}}>
      <Sidebar  />
      <Layout>
        <Header style={{ padding: 0, display: 'flex', justifyContent: 'end'}}  >
          <Button onClick={()=> {dispatch(logout())}} style={{margin: "15px 20px 0 0"}} >LogOut</Button>
        </Header>
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
