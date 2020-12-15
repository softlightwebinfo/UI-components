// Generated with util/create-component.js
import React from "react";
import { CardProgressBlockProps } from "./CardProgressBlock.types";
import "./CardProgressBlock.scss";
import { BEM } from "../../libs/BEM";
import { Card, Progress, Typography } from "../../components";

const CardProgressBlock: React.FC<CardProgressBlockProps> = (
    {
        className,
        style,
        value,
        title,
        color,
        date,
        subTitle,
        position = "vertical",
    }) => {
    const bem = new BEM("CardProgressBlock", {
        position: position,
    });
    bem.Append(className);
    return (
        <Card
            isBody
            style={style}
            className={bem.toString()}
        >
            <div>
                <Progress color={color} value={value} position={position}/>
            </div>
            <div>
                <Typography variant={"caption"} component={"span"} className={bem.Children("date")}>{date}</Typography>
                <Typography component={"h4"} className={bem.Children("title")}>{title}</Typography>
                <Typography component={"p"} variant={"caption"} color={"blue-2"}>{subTitle}</Typography>
            </div>
        </Card>
    )
};
export default CardProgressBlock;