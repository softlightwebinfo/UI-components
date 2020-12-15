// Generated with util/create-component.js
import React, { useState } from "react";
import Drawer from "./Drawer";
import { Button } from "../../index";

export default {
    title: "Drawer"
};
export const Default = () => {
    const [state, setState] = useState(false);

    const closeDrawer = () => setState(false);
    const openDrawer = () => setState(true);
    return (
        <div>
            <div>
                <Button onClick={() => openDrawer()}>Click Drawer</Button>
            </div>
            <Drawer
                id={"Drawer 1"}
                header={"Edit information"}
                slideFrom={"right"}
                isOpen={state}
                onRequestClose={() => closeDrawer()}
            >
                Hello example
            </Drawer>
        </div>
    );
}
