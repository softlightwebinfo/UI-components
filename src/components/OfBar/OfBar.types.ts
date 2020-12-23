// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";

export interface OfBarProps extends IProps {
    avatar: string;
    name: string;
    role: string;
    message: ReactElement | string;
    labelButton: string;
    show: boolean;

    onClickButton(evt: any);

    onClose(evt: any);
}