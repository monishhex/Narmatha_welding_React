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
      
      {/* ✅ Top Header First */}
     <Header
  style={{
    height: "50px",
    lineHeight: "50px",
    padding: "0 12px",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  }}
      >
        <Button
          type="text"
          onClick={() =>
            screens.lg
              ? setCollapsed(!collapsed)
              : setMobileOpen(true)
          }
          icon={
            collapsed ? (
              <MenuUnfoldOutlined />
            ) : (
              <MenuFoldOutlined />
            )
          }
        />
      </Header>

      {/* ✅ Body Layout */}
      <Layout>
        
        {/* ✅ Desktop Sidebar */}
        {screens.lg && (
          <Sider
            collapsible
            collapsed={collapsed}
            trigger={null}
            width={220}
            style={{
              minHeight: "calc(100vh - 64px)",
            }}
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
            bodyStyle={{ padding: 0 }}
          >
            <SideNav setMobileOpen={setMobileOpen} />
          </Drawer>
        )}

        {/* ✅ Main Content */}
        <Content
          style={{
            padding: "20px",
            background: "#f5f5f5",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;