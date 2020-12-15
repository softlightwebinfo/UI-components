// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface DropdownProps extends IProps {
    select: string;
    data: DropdownPropsData[];
    placeholder?: string;

    onClick(value: string, row: DropdownPropsData, index: number);
}

export interface DropdownPropsData {
    label: string;
    value: string;
};