// Generated with util/create-component.js
import React, { useEffect } from "react";
import { ToastProps } from "./Toast.types";
import "./Toast.scss";
import { BEM } from "../../libs/BEM";
import { Notification } from "../index";

const Toast: React.FC<ToastProps> = ({className, style, ...props}) => {
    const {
        time = 3000,
    } = props;
    const bem = new BEM("Toast", {});
    bem.Append(className);

    const onDismiss = (e) => {
        props.onDismiss && props.onDismiss(e);
    };

    useEffect(() => {
        const timeout = setTimeout(onDismiss, time);
        return () => clearTimeout(timeout);
    });

    return (
        <Notification
            {...props}
            className={bem.toString()}
            onDismiss={onDismiss}
        />
    )
};
export default Toast;