// Generated with util/create-component.js
import React from "react";
import { WrapProps } from "./Wrap.types";
import "./Wrap.scss";
import { BEM } from "../assets/libs/BEM";

const Wrap: React.FC<WrapProps> = (
    {
        className,
        style,
        children
    }) => {
    const bem = new BEM("Wrap", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <ul className={bem.Children("list")}>
                {children}
            </ul>
        </div>
    )
};
export default Wrap;