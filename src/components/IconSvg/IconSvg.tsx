// Generated with util/create-component.js
import React from "react";
import { IconSvgProps } from "./IconSvg.types";
import "./IconSvg.scss";
import { BEM } from "../../libs/BEM";
import Checklist from "./icons/Checklist";
import Error404 from "./icons/Error404";
import Error500 from "./icons/Error500";

const icons = {
    checklist: Checklist,
    404: Error404,
    500: Error500,
};

const IconSvg: React.FC<IconSvgProps> = ({icon, className, style, children}) => {
    const bem = new BEM("IconSvg", {});
    bem.Append(className);
    const Component = icon in icons ? icons[icon] : "span";
    return (
        <div style={style} className={bem.toString()}>
            <Component/>
        </div>
    )
};
export default IconSvg;