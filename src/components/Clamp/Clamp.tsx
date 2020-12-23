// Generated with util/create-component.js
import React from "react";
import { ClampProps } from "./Clamp.types";
import "./Clamp.scss";
import { BEM } from "../../libs/BEM";

const Clamp: React.FC<ClampProps> = ({className, onClick, style, children}) => {
    const bem = new BEM("Clamp", {});
    bem.Append(className);
    return (
        <span onClick={onClick} style={style} className={bem.toString()}>{children}</span>
    )
};
export default Clamp;