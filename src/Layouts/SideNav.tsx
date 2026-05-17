import React from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";

const SideNav: React.FC<{ setMobileOpen?: (val: boolean) => void }> = ({
  setMobileOpen,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const items = [
    {
      key: "/",
      icon: <FaHome />,
      label: "Dashboard",
    },
    {
      key: "workers",
      icon: <FaUser />,
      label: "Workers",
      children: [
        {
          key: "/workers/attendance",
          label: "Attendance",
        },
      ],
    },
  ];

  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[location.pathname]} // ✅ active highlight
      defaultOpenKeys={["workers"]} // ✅ accordion open default
      items={items}
      onClick={({ key }) => {
        navigate(key); // ✅ route navigation

        // close drawer on mobile
        if (setMobileOpen) setMobileOpen(false);
      }}
    />
  );
};

export default SideNav;