// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { AlertTextProps } from "../AlertText/AlertText.types";
import { ListProps } from "../List/List.types";
import { ReactElement } from "react";

export interface HeaderHorizontalProps extends IProps {
    message?: AlertTextProps;
    rows?: ListProps;
    left?: ReactElement;
    right?: ReactElement;
    noContainer?: boolean;
}