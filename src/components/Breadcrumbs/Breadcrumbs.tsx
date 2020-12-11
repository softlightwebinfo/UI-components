// Generated with util/create-component.js
import React from "react";
import { BreadcrumbsProps } from "./Breadcrumbs.types";
import "./Breadcrumbs.scss";
import { BEM } from "../../libs/BEM";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({className, style, children}) => {
    const bem = new BEM("Breadcrumbs", {});
    bem.Append(className);
    return (
        <nav
            style={style}
            className={bem.toString()}
        >
            <ol className={bem.Children("list")}>
                {children}
            </ol>
        </nav>
    )
};
export default Breadcrumbs;