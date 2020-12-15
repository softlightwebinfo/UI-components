// Generated with util/create-component.js
import React from "react";
import { LogoProps } from "./Logo.types";
import "./Logo.scss";
import { BEM } from "../../libs/BEM";

const Logo: React.FC<LogoProps> = (
    {
        className,
        style,
        onClick,
        title,
        image,
    }) => {
    const bem = new BEM("Logo", {});
    bem.Append(className);
    return (
        <div
            onClick={onClick}
            style={style}
            className={bem.toString()}
        >
            <img src={image} alt={title} title={title}/>
        </div>
    )
};
export default Logo;