// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { TColor } from "../assets/types/TColor";
import { TAppearance } from "../assets/types/TAppearance";
import { TSizeHeight } from "../assets/types/TSize";
import { TVariant } from "../assets/types/TVariant";

export interface ButtonProps extends IProps {
    theme?: TColor
    appearance?: TAppearance;
    color?: TColor;
    colorText?: TColor;
    variant?: TVariant;
    element?: boolean;
    size?: TSizeHeight;

    onClick(evt: any);
}