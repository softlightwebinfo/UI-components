// Generated with util/create-component.js
import React from "react";
import { ToastContainerProps } from "./ToastContainer.types";
import "./ToastContainer.scss";
import { BEM } from "../../libs/BEM";
import { useGeneralContext } from "../../context";
import { Toast } from "../index";

const ToastContainer: React.FC<ToastContainerProps> = ({className, style, children}) => {
    const bem = new BEM("ToastContainer", {});
    bem.Append(className);
    const {notifications, dismissNotification} = useGeneralContext()

    const onDismiss = (index) => {
        dismissNotification(index);
    };

    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {notifications.map((value, index) => (
                <Toast {...value} key={index} onDismiss={() => onDismiss(index)}/>
            ))}
        </div>
    )
};
export default ToastContainer;