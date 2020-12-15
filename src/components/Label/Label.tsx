// Generated with util/create-component.js
import React from "react";
import { LabelProps } from "./Label.types";
import "./Label.scss";
import { BEM } from "../../libs/BEM";

const Label: React.FC<LabelProps> = ({className, style, children, node}) => {
    const bem = new BEM("Label", {});
    bem.Append(className);
    return (
        <label style={style} className={bem.toString()}>
            {children}
            {node}
        </label>
    )
};
export default Label;