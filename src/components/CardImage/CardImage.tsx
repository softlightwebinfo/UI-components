// Generated with util/create-component.js
import React from "react";
import { CardImageProps } from "./CardImage.types";
import "./CardImage.scss";
import { BEM } from "../../libs/BEM";
import { Card, Image } from "../index";

const CardImage: React.FC<CardImageProps> = ({className, style, children, ...props}) => {
    const {
        image,
        title,
        onClick
    } = props;
    const bem = new BEM("CardImage", {});
    bem.Append(className);
    return (
        <Card
            onClick={onClick}
            style={style}
            className={bem.toString()}
        >
            <Image title={title} src={image}/>
        </Card>
    )
};
export default CardImage;