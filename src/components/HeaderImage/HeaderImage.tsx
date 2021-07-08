// Generated with util/create-component.js
import React from "react";
import { HeaderImageProps } from "./HeaderImage.types";
import "./HeaderImage.scss";
import { BEM } from "../../libs";
import { Carousel } from "../index";

const HeaderImage: React.FC<HeaderImageProps> = ({className, style, ...props}) => {
    const bem = new BEM("HeaderImage", {});
    bem.Append(className);
    const {children, images} = props;
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {children && (
                <div className={bem.Children("children")}>
                    {children}
                </div>
            )}
            <Carousel images={images}/>
            <div className={bem.Children("circle")}/>
        </div>
    )
};
export default HeaderImage;