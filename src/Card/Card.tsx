// Generated with util/create-component.js
import React from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";
import { BEM } from "../assets/libs/BEM";

const Card: React.FC<CardProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("Card", {});
    bem.Append(className);
    return (
        <article
            {...props}
            style={style}
            className={bem.toString()}
        >
            {children}
        </article>
    )
};
export default Card;