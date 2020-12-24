// Generated with util/create-component.js
import React from "react";
import { FullPageTemplateProps } from "./FullPageTemplate.types";
import "./FullPageTemplate.scss";
import { BEM } from "../../libs/BEM";
import { FullPage, Timer } from "../index";
import { FooterWidget } from "../../widgets";

const FullPageTemplate: React.FC<FullPageTemplateProps> = ({className, style, ...props}) => {
    const {
        backgroundImage,
        children,
        footer
    } = props;
    const bem = new BEM("FullPageTemplate", {});
    bem.Append(className);
    return (
        <FullPage
            style={style}
            className={bem.toString()}
        >
            <div
                style={{backgroundImage: `url(${backgroundImage})`}}
                className={bem.Children("backgroundImage")}
            />
            <Timer className={bem.Children("timer")} current/>
            <section className={bem.Children("content")}>
                {children}
            </section>
            <FooterWidget
                className={bem.Children("footer")}
                {...footer}
            />
        </FullPage>
    )
};
export default FullPageTemplate;