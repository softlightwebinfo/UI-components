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
        children
    }) => {
    const bem = new BEM("Avatar", {
        [size]: !!size,
    });
    bem.Append(className);
    return (
        <span
            style={style}
            className={bem.toString()}
        >
            <img loading={"lazy"} className={bem.Children("img")} src={src} title={name} alt={name}/>
        </span>
    )
};
export default Avatar;