// Generated with util/create-component.js
import React from "react";
import { PillProps } from "./Pill.types";
import "./Pill.scss";
import { BEM } from "../assets/libs/BEM";

const Pill: React.FC<PillProps> = ({className, color, variant, colorText, style, children}) => {
    const bem = new BEM("Pill", {
        [color]: variant == "outline" && !!color,
        bg: variant == "solid" && color,
        [variant]: !!variant,
        [colorText]: !!colorText
    });
    bem.Append(className);
    return (
        <span
            style={style}
            className={bem.toString()}
        >
            {children}
        </span>
    )
};
export default Pill;