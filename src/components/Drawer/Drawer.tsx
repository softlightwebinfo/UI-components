// Generated with util/create-component.js
import React from "react";
import { DrawerProps } from "./Drawer.types";
import "./Drawer.scss";
import { BEM } from "../../libs/BEM";
import { Dialog, Overlay } from "../../index";

const Drawer: React.FC<DrawerProps> = (
    {
        className,
        style,
        children,
        id,
        isOpen,
        header,
        onRequestClose,
        footer,
        slideFrom = "right",
    }) => {
    const bem = new BEM("Drawer", {
        open: isOpen,
        position: slideFrom,
    });
    bem.Append(className);
    // if (!isOpen) return null;
    return (
        <Overlay
            isOpen={isOpen}
            id={id}
            style={style}
            className={bem.toString()}
        >
            <Dialog
                title={header}
                footer={footer}
                className={bem.Children("dialog")}
                onClose={onRequestClose}
            >
                {children}
            </Dialog>
        </Overlay>
    )
};
export default Drawer;