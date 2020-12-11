// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";

export interface SelectProps extends IProps {
    children: ReactElement | ReactElement[];
    value: string;

    onChange(select: string);
}