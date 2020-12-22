// Generated with util/create-component.js
import React from "react";
import { FooterBigWidgetProps } from "./FooterBigWidget.types";
import "./FooterBigWidget.scss";
import { BEM } from "../../libs/BEM";
import { FooterListWidget, FooterWidget } from "../index";

const FooterBigWidget: React.FC<FooterBigWidgetProps> = ({className, style, ...props}) => {
    const {
        bottom,
        top,
    } = props;
    const bem = new BEM("FooterBigWidget", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <FooterListWidget {...top}/>
            <FooterWidget {...bottom}/>
        </div>
    )
};

export default FooterBigWidget;