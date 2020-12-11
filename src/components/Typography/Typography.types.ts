// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";
import { TAlign } from "../../types/TAlign";
import { TColor } from "../../types/TColor";
import { TDisplay } from "../../types/TDisplay";
import { IObjectString } from "../../interfaces/IObject";
import { TTypographyVariant } from "../../types/TTypographyVariant";

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