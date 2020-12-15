// Generated with util/create-component.js
import React from "react";
import { CardFeatureProps } from "./CardFeature.types";
import "./CardFeature.scss";
import { BEM } from "../../libs/BEM";
import { Avatar, Card, Typography } from "../index";

const CardFeature: React.FC<CardFeatureProps> = ({className, row, title, description, icon, style, children}) => {
    const bem = new BEM("CardFeature", {
        row: !!row,
    });
    bem.Append(className);
    return (
        <Card
            isBody
            style={style}
            className={bem.toString()}
        >
            <div className={bem.Children("icon")}>
                <Avatar name={icon}/>
            </div>
            <section className={bem.Children("content")}>
                <Typography className={bem.Children("title")} component={"h3"} variant={"body1"}>{title}</Typography>
                <Typography variant={"body2"}>{description}</Typography>
            </section>
        </Card>
    )
};
export default CardFeature;