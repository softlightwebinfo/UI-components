// Generated with util/create-component.js
import React from "react";
import { AlertProProps } from "./AlertPro.types";
import "./AlertPro.scss";
import { BEM } from "../../libs/BEM";
import { Alert, Typography } from "../index";

const AlertPro: React.FC<AlertProProps> = ({className, title, message, color, style, children}) => {
    const bem = new BEM("AlertPro", {});
    bem.Append(className);
    return (
        <Alert
            style={style}
            className={bem.toString()}
            color={color}
        >
            <Typography variant={"body1"} className={bem.Children("title")}>{title}</Typography>
            <Typography variant={"caption"} className={bem.Children("message")}>{message}</Typography>
        </Alert>
    )
};
export default AlertPro;