// Generated with util/create-component.js
import React from "react";
import { CardAboutSimpleWidgetProps } from "./CardAboutSimpleWidget.types";
import "./CardAboutSimpleWidget.scss";
import { BEM } from "../../libs/BEM";
import { Card, Typography } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardAboutSimpleWidget: React.FC<CardAboutSimpleWidgetProps> = (
    {
        className,
        style,
        children,
        title,
        description,
        icon
    }) => {
    const bem = new BEM("CardAboutSimpleWidget", {});
    bem.Append(className);
    return (
        <Card isBody style={style} className={bem.toString()}>
            {icon && (
                <div className={bem.Children("icon")}>
                    <FontAwesomeIcon icon={icon}/>
                </div>
            )}
            <Typography className={bem.Children("title")} component={"h3"} align={"center"}>{title}</Typography>
            <Typography className={bem.Children("description")} variant={"caption"} align={"center"}>
                {description}
            </Typography>
            {children}
        </Card>
    )
};
export default CardAboutSimpleWidget;