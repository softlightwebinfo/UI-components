// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { ReactElement } from "react";

export interface DialogProps extends IProps {
    onClose(e: any);

    footer?: ReactElement;
    title?: string;
    size?: TDialogSize;
}

export type TDialogSize = "alert";