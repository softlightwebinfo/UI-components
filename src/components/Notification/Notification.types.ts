// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TNotification } from "../../types/TNotification";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface NotificationProps extends IProps {
    type?: TNotification;
    title?: string;
    icon?: IconProp;
    noIcon?: boolean;
    message: string;

    onDismiss?(evt: any);
}