// Generated with util/create-component.js
import React from "react";
import { BlogProps } from "./Blog.types";
import "./Blog.scss";
import { BEM } from "../../libs/BEM";
import { Card, Circle, Image, Typography } from "../index";

const Blog: React.FC<BlogProps> = ({className, style, ...props}) => {
    const {
        image,
        title,
        date,
        description,
    } = props;
    const bem = new BEM("Blog", {});
    bem.Append(className);
    return (
        <Card
            style={style}
            className={bem.toString()}
        >
            <Image className={bem.Children("image")} title={title} src={image}/>
            <Circle className={bem.Children("circle")} size={80}>
                {date}
            </Circle>
           <div className={bem.Children("content")}>
               <Typography className={bem.Children("title")} component={"h3"}>{title}</Typography>
               <Typography>{description}</Typography>
           </div>
        </Card>
    )
};
export default Blog;