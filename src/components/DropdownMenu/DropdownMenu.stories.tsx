// Generated with util/create-component.js
import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { faBan, faEnvelope, faIdCard, faMoneyBill, faPrint } from "@fortawesome/free-solid-svg-icons";
import { Button, Popover } from "../index";

export default {
    title: "DropdownMenu"
};
export const Default = () => (
    <DropdownMenu
        menu={[
            {label: "View Statement", icon: faIdCard},
            {label: "Spending", icon: faMoneyBill},
            {label: "Tax breakdown", icon: faBan},
            {separator: true},
            {label: "Print statement", icon: faPrint},
            {label: "Email statement", icon: faEnvelope}
        ]}
    />
);
export const DropdownMenuDefault = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div style={{padding: 20}}>
            <Popover
                trigger={<Button>Click</Button>}
                open={open}
                onOpen={setOpen}
            >
                <DropdownMenu
                    menu={[
                        {label: "View Statement", icon: faIdCard},
                        {label: "Spending", icon: faMoneyBill},
                        {label: "Tax breakdown", icon: faBan},
                        {separator: true},
                        {label: "Print statement", icon: faPrint},
                        {label: "Email statement", icon: faEnvelope}
                    ]}
                />
            </Popover>
        </div>
    );
}
