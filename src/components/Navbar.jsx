import React from "react";
import { Menu, Button } from "antd";

const items = [
    { key: "2", label: "Tide" },
    { key: "3", label: "Weather" },
    { key: "4", label: "Wind" },
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
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Navbar;