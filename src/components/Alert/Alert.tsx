// Generated with util/create-component.js
import React from "react";
import { AlertProps } from "./Alert.types";
import "./Alert.scss";
import { BEM } from "../../libs/BEM";

const Alert: React.FC<AlertProps> = ({className, color, message, style, children}) => {
    const bem = new BEM("Alert", {
        [color]: !!color,
    });
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {children}
            {message}
        </div>
    )
};
export default Alert;