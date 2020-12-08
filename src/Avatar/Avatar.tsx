// Generated with util/create-component.js
import React from "react";
import { AvatarProps } from "./Avatar.types";
import "./Avatar.scss";
import { BEM } from "../assets/libs/BEM";

const Avatar: React.FC<AvatarProps> = (
    {
        className,
        size,
        name,
        src,
        style,
        title,
        children
    }) => {
    const bem = new BEM("Avatar", {
        [size]: !!size,
    });
    bem.Append(className);
    return (
        <span
            title={title}
            style={style}
            className={bem.toString()}
        >
            {!src && <span>{name}</span>}
            {src && <img loading={"lazy"} className={bem.Children("img")} src={src} title={name} alt={name}/>}
        </span>
    )
};
export default Avatar;