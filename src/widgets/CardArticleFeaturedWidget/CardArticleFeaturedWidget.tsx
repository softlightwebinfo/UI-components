// Generated with util/create-component.js
import React from "react";
import { CardArticleFeaturedWidgetProps } from "./CardArticleFeaturedWidget.types";
import "./CardArticleFeaturedWidget.scss";
import { BEM } from "../../libs/BEM";
import { Avatar, Badge, Breadcrumb, Card, Clamps, Typography } from "../../components";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const CardArticleFeaturedWidget: React.FC<CardArticleFeaturedWidgetProps> = (
    {
        className,
        style,
        children,
        title,
        image,
        breadCrumb,
        label,
        isFeatured,
        avatar,
        description
    }) => {
    const bem = new BEM("CardArticleFeaturedWidget", {
        isFeatured: isFeatured,
        isDescription: !!description,
    });
    bem.Append(className);
    return (
        <Card
            style={style}
            className={bem.toString()}
        >
            <header className={bem.Children("header")}>
                <img src={image} alt={title}/>
                <Clamps numbers={3} onClick={console.log}/>
            </header>
            <section className={bem.Children("body")}>
                <div className={bem.Children("avatar")}>
                    <Avatar src={avatar} name={title}/>
                    <Badge>{label}</Badge>
                </div>
                <Typography
                    align={"center"}
                    className={bem.Children("title")}
                    component={"h3"}
                    variant={"body1"}
                >
                    {title}
                </Typography>
                {description && (
                    <Typography variant={"body2"} className={bem.Children("description")}>
                        {description}
                    </Typography>
                )}
            </section>
            <footer className={bem.Children("footer")}>
                <div className={bem.Children("clamps")}>
                    <Clamps numbers={3} onClick={console.log}/>
                </div>
                <div className={bem.Children("breadcrumb")}>
                    <Breadcrumbs>
                        {breadCrumb.map((value, index) => (
                            <Breadcrumb label={value.label} key={index} onClick={value.onClick}/>
                        ))}
                    </Breadcrumbs>
                </div>
            </footer>
            {children}
        </Card>
    )
};
export default CardArticleFeaturedWidget;