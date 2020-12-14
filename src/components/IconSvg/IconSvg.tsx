// Generated with util/create-component.js
import React from "react";
import { IconSvgProps } from "./IconSvg.types";
import "./IconSvg.scss";
import { BEM } from "../../libs/BEM";
import Checklist from "./icons/Checklist";

const icons = {
    checklist: Checklist,
};

const IconSvg: React.FC<IconSvgProps> = ({icon, className, style, children}) => {
    const bem = new BEM("IconSvg", {});
    bem.Append(className);
    const Component = icon in icons ? icons[icon] : "span";
    return (
        <div style={style} className={bem.toString()} data-testid="IconSvg">
            <Component/>
        </div>
    )
};
export default IconSvg;