// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { ReactElement, ReactNode } from "react";

export interface PopoverProps extends IProps {
    open: boolean;
    trigger: ReactElement | ReactNode;
    showClose?: boolean;

    onOpen(open: boolean);

    onClear?(e: any);
}