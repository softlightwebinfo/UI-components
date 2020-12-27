// Generated with util/create-component.js
import React from "react";
import { NotificationProps } from "./Notification.types";
import "./Notification.scss";
import { BEM } from "../../libs/BEM";
import { Button, Card, Typography } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faCheck, faExclamationTriangle, faInfo, faTimes } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Notification: React.FC<NotificationProps> = ({className, type = "success", style, ...props}) => {
    const {icon, title, message, noIcon, onDismiss} = props;
    const bem = new BEM("Notification", {
        [type]: !!type,
    });
    bem.Append(className);
    const getIcon = (): IconProp => {
        if (icon) return icon;
        switch (type) {
            case "success":
                return faCheck;
            case "error":
                return faBomb
            case "info":
                return faInfo
            case "warning":
                return faExclamationTriangle;
            default:
                return faCheck;
        }
    };
    return (
        <Card
            border
            style={style}
            className={bem.toString()}
        >
            {!noIcon && <FontAwesomeIcon className={bem.Children("icon")} icon={getIcon()}/>}
            <div className={bem.Children("message")}>
                <Typography className={bem.Children("title")} component={"h5"}>{title}</Typography>
                <Typography className={bem.Children("description")} variant={"body2"}>{message}</Typography>
            </div>
            {onDismiss && <Button hasIcon onClick={onDismiss}><FontAwesomeIcon icon={faTimes}/></Button>}
        </Card>
    )
};
export default Notification;