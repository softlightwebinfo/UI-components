// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { TDialogSize } from "../Dialog/Dialog.types";
import { ReactElement } from "react";

export interface ModalProps extends IProps {
    id: string;
    isOpen: boolean;
    size?: TDialogSize;
    title?: string;
    footer?: ReactElement;

    onRequestClose();
}