// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";
import { TAlignItems } from "../../types/TAlign";

export interface ColProps extends IProps {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    auto?: boolean;
    children: ReactElement | ReactElement[];
    alignSelf?: TAlignItems;
    grow?: boolean;
    paddingBottom?: boolean;
    noPadding?: boolean;
    skrink?: boolean;
    col?: number;
    offset?: number;
}