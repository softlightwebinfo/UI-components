// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { TId } from "../assets/types/TId";
import { ReactElement } from "react";

export interface TabProps extends IProps {
    id: TId;
    isSelected: boolean;
    "aria-control": string;
    children: ReactElement | string;
    component?: any;

    onSelect();
}