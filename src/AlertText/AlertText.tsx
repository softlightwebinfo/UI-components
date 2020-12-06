// Generated with util/create-component.js
import React from "react";
import { AlertTextProps } from "./AlertText.types";
import "./AlertText.scss";
import { BEM } from "../assets/libs/BEM";

const AlertText: React.FC<AlertTextProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("AlertText", {});
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()}>
            {props.icon}
            {props.message}
            {children}
        </div>
    )
};
export default AlertText;