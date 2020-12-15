// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TId } from "../../types/TId";
import { ReactElement } from "react";

export interface TabProps extends IProps {
    id: TId;
    isSelected: boolean;
    "aria-control": string;
    children: ReactElement | string;
    component?: any;

    onSelect();
}