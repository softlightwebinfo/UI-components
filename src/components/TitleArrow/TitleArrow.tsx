// Generated with util/create-component.js
import React from "react";
import { TitleArrowProps } from "./TitleArrow.types";
import "./TitleArrow.scss";
import { BEM } from "../../libs/BEM";
import { Typography } from "../index";

const TitleArrow: React.FC<TitleArrowProps> = (
    {
        className,
        style,
        children,
        title,
        subTitle,
        spaceTop
    }) => {
    const bem = new BEM("TitleArrow", {
        spaceTop: spaceTop,
    });
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <div className={bem.Children("content")}>
                <Typography component={"h2"}>{title}</Typography>
                <Typography>{subTitle}</Typography>
                {children}
            </div>
        </div>
    )
};
export default TitleArrow;