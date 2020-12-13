// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";

export interface NavbarProps extends IProps {
    onClickMenu?();

    left?: ReactElement;
    right?: ReactElement;
    title?: string;
}