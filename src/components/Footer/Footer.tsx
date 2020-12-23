// Generated with util/create-component.js
import React from "react";
import { FooterProps } from "./Footer.types";
import "./Footer.scss";
import { BEM } from "../../libs/BEM";

const Footer: React.FC<FooterProps> = ({className, style, children}) => {
    const bem = new BEM("Footer", {});
    bem.Append(className);
    return (
        <footer style={style} className={bem.toString()}>{children}</footer>
    )
};
export default Footer;