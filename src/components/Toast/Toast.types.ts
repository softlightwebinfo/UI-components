// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { NotificationProps } from "../Notification/Notification.types";

export interface ToastProps extends IProps, NotificationProps {
    onDismiss?(evt: any);

    time?: number;
}