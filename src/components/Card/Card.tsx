// Generated with util/create-component.js
import React from "react";
import { CardProps } from "./Card.types";
import "./Card.scss";
import { BEM } from "../../libs/BEM";
import { Typography } from "../../index";

const Card: React.FC<CardProps> = (
    {
        className,
        title,
        isBody = false,
        style,
        children,
        multipleBody = [],
        dark = false,
        gradient,
        isTitleLabel,
        transparent,
        border,
        ...props
    }) => {
        const bem = new BEM("Card", {
            multipleBody: !!multipleBody,
            dark: !!dark,
            gradient: gradient,
            titleLabel: isTitleLabel,
            transparent: transparent,
            border: border,
        });
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
                            {props.icon && <span className={bem.Children("icon")}>{props.icon}</span>}
                            {title}
                        </Typography>
                        <div>{props.actions}</div>
                    </header>
                )}
                {isBody && (<section className={bem.Children("body")}>{children}</section>)}
                {!isBody && children && children}
                {multipleBody.map((value, index) => (
                    <section key={index}
                             className={bem.Children("body")}
                    >
                        {value}
                    </section>
                ))}
            </article>
        )
    }
;
export default Card;