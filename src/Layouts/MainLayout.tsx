import React, { useState } from "react";
import { Layout, Drawer, Grid, Button } from "antd";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";

const { Sider, Content, Header } = Layout;
const { useBreakpoint } = Grid;

const MainLayout: React.FC = () => {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      
      {/* ✅ Sidebar */}
      {screens.lg && (
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null} // ❗ disable default
          width={220}
        >
          <SideNav />
        </Sider>
      )}

      {/* ✅ Mobile Drawer */}
      {!screens.lg && (
        <Drawer
          placement="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          width={250}
        >
          <SideNav setMobileOpen={setMobileOpen} />
        </Drawer>
      )}

      <Layout>
        {/* ✅ Header with Burger */}
        <Header style={{ padding: "0px 16px", background: "#ffff" }}>
          <Button
            type="text"
            onClick={() =>
              screens.lg
                ? setCollapsed(!collapsed)
                : setMobileOpen(true)
            }
            icon={
              collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
            }
          />
        </Header>

        {/* ✅ Content */}
        <Content style={{ padding: "20px" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;