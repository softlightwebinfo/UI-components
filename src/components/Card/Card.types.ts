// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement, ReactNode } from "react";

export interface CardProps extends IProps {
    children?: ReactElement[] | ReactNode[] | ReactElement | ReactNode;
    title?: string;
    icon?: ReactElement;
    actions?: ReactElement | ReactElement[];
    isBody?: boolean;
    dark?: boolean;
    gradient?: boolean;
    isTitleLabel?: boolean;
    border?: boolean;
    transparent?: boolean;
    multipleBody?: ReactElement[];
}