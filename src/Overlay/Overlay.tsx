// Generated with util/create-component.js
import React from "react";
import { OverlayProps } from "./Overlay.types";
import "./Overlay.scss";
import { BEM } from "../assets/libs/BEM";

const Overlay: React.FC<OverlayProps> = ({className, isOpen, id, style, children}) => {
    const bem = new BEM("Overlay", {open: isOpen});
    bem.Append(className);
    return (
        <div role={"presentation"} id={id} style={style} className={bem.toString()}>{children}</div>
    )
};
export default Overlay;