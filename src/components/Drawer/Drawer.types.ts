// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TDrawerSlideFrom } from "../../types/TDrawerSlideFrom";
import { ReactElement } from "react";

export interface DrawerProps extends IProps {
    isOpen: boolean;
    id: string;
    header: string;
    slideFrom?: TDrawerSlideFrom;
    footer?: ReactElement;

    onRequestClose();
}