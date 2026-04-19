import React from "react";
import { Menu, Button } from "antd";

const items = [
  { key: "1", label: "Dashboard" },
  { key: "2", label: "Tide" },
  { key: "3", label: "Weather" },
  { key: "4", label: "Wind" },
];

const NavbarAntd = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-center pt-6">
      <div
        className="
          flex items-center justify-between
          w-[600px] px-4 py-2
          rounded-full
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          shadow-xl
        "
      >
        {/* Logo */}
        <div className="font-semibold text-black">
          SeaHub
        </div>

        {/* Menu Antd */}
        <Menu
          mode="horizontal"
          items={items}
          selectable
          style={{
            background: "transparent",
            borderBottom: "none",
            flex: 1,
            justifyContent: "center",
          }}
        />

        {/* Action */}
        <Button
          type="primary"
          shape="round"
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default NavbarAntd;