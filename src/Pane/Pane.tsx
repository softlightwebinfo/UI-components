// Generated with util/create-component.js
import React from "react";
import { PaneProps } from "./Pane.types";
import "./Pane.scss";
import { BEM } from "../assets/libs/BEM";

const Pane: React.FC<PaneProps> = (
    {
        className,
        style,
        children,
        ...props
    }) => {
    const bem = new BEM("Pane", {
        flex: props.flex,
    });
    bem.Append(className);
    return (
        <div style={{
            ...style,
            height: props.height,
        }} className={bem.toString()} data-testid="Pane">{children}</div>
    )
};
export default Pane;