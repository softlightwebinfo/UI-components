// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { ReactElement } from "react";
import { TAlign } from "../assets/types/TAlign";
import { TColor } from "../assets/types/TColor";
import { TDisplay } from "../assets/types/TDisplay";
import { IObjectString } from "../assets/interfaces/IObject";
import { TTypographyVariant } from "../assets/types/TTypographyVariant";

export interface TypographyProps extends IProps {
    onClick?: (e: any) => void;
    children: ReactElement | string | (ReactElement | string)[];
    align?: TAlign;
    color?: TColor;
    display?: TDisplay;
    gutterBottom?: boolean;
    noWrap?: boolean;
    paragraph?: boolean;
    variant?: TTypographyVariant;
    variantMapping?: IObjectString;
    component?: string;
    className?: string;
}