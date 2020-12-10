// Generated with util/create-component.js
import React from "react";
import { AvatarGroupProps } from "./AvatarGroup.types";
import "./AvatarGroup.scss";
import { BEM } from "../assets/libs/BEM";
import { Avatar } from "../index";

const AvatarGroup: React.FC<AvatarGroupProps> = (
    {
        className,
        avatars,
        maxAvatars,
        showCounter,
        style,
    }) => {
    const bem = new BEM("AvatarGroup", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {showCounter && (<Avatar className={bem.Children("counter")} name={avatars.length.toString()}/>)}
            {avatars.map(((value, index) => {
                if (index > maxAvatars - 1) return null;
                return (
                    <Avatar
                        style={{zIndex: avatars.length - index}}
                        name={value.assistiveText}
                        src={value.src}
                        title={value.title}
                        key={index}
                    />
                )
            }))}
        </div>
    )
};
export default AvatarGroup;