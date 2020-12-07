// Generated with util/create-component.js
import React from "react";
import { BreadcrumbProps } from "./Breadcrumb.types";
import "./Breadcrumb.scss";
import { BEM } from "../assets/libs/BEM";

const Breadcrumb: React.FC<BreadcrumbProps> = (
    {
        className,
        onClick,
        label,
        style,
        children
    }) => {
    const bem = new BEM("Breadcrumb", {
        
    });
    bem.Append(className);
    return (
        <li
            onClick={onClick}
            style={style}
            className={bem.toString()}
        >
            <span>{label}</span>
        </li>
    )
};
export default Breadcrumb;