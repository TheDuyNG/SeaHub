import React from "react";
import { Menu, Button } from "antd";

const items = [
    { key: "2", label: "Thủy triều" },
    { key: "3", label: "Thời tiết" },
    { key: "4", label: "Gió" },
];

const Navbar = () => {
    return (
        <div className=" p-6">
            <div className="flex w-full items-center">
                <div className="font-semibold text-black">
                    SeaHub
                </div>

                <Menu
                    mode="horizontal"
                    items={items}
                    selectable
                    style={{ minWidth: 0, flex: "auto" }}
                />


                <Button
                    type="primary"
                    shape="round"
                >
                    Đăng nhập
                </Button>
            </div>
        </div>
    );
};

export default Navbar;