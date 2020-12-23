// Generated with util/create-component.js
import React from "react";
import { ImageProps } from "./Image.types";
import "./Image.scss";
import { BEM } from "../../libs/BEM";

const Image: React.FC<ImageProps> = ({className, style, alt, title, src}) => {
    const bem = new BEM("Image", {});
    bem.Append(className);
    return (
        <img style={style} className={bem.toString()} src={src} title={title} alt={alt || title}/>
    )
};
export default Image;