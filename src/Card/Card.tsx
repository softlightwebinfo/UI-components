// Generated with util/create-component.js
import React from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";
import { BEM } from "../assets/libs/BEM";
import { Typography } from "../index";

const Card: React.FC<CardProps> = ({className, title, style, children, ...props}) => {
    const bem = new BEM("Card", {});
    bem.Append(className);
    return (
        <article
            style={style}
            className={bem.toString()}
        >
            {title && (
                <header className={bem.Children("header")}>
                    <Typography
                        variant={"body3"}
                        className={bem.Children("title")}
                        component={"h2"}
                    >
                        <span className={bem.Children("icon")}>{props.icon}</span>
                        {title}
                    </Typography>
                    <div>{props.actions}</div>
                </header>
            )}
            {children}
        </article>
    )
};
export default Card;