// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { TColor } from "../../types/TColor";
import { TAppearance } from "../../types/TAppearance";
import { TSizeHeight } from "../../types/TSize";
import { TVariant } from "../../types/TVariant";

export interface ButtonProps extends IProps {
    theme?: TColor
    appearance?: TAppearance;
    color?: TColor;
    colorText?: TColor;
    variant?: TVariant;
    element?: boolean;
    size?: TSizeHeight;

    onClick?(evt: any);
}