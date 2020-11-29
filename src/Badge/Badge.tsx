// Generated with util/create-component.js
import React from "react";
import { BadgeProps } from "./Badge.types";
import "./Badge.scss";
import { BEM } from "../assets/libs/BEM";

const Badge: React.FC<BadgeProps> = ({colorText, style, variant, className, children, color}) => {
    const bem = new BEM("Badge", {
        [color]: variant == "outline" && !!color,
        bg: variant == "solid" && color,
        [variant]: !!variant,
        [colorText]: !!colorText
    })
    bem.Append(className);
    return (
        <span style={style} className={bem.toString()}>{children}</span>
    );
}
export default Badge;