// Generated with util/create-component.js
import React from "react";
import { AvatarUserProps } from "./AvatarUser.types";
import "./AvatarUser.scss";
import { BEM } from "../../libs/BEM";
import { Avatar, Typography } from "../index";

const AvatarUser: React.FC<AvatarUserProps> = (
    {
        className,
        style,
        name,
        avatar,
        subTitle,
        isDark,
    }) => {
    const bem = new BEM("AvatarUser", {
        isDark: !!isDark,
    });
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <Avatar className={bem.Children("avatar")} name={name} src={avatar}/>
            <Typography align={"center"} variant={"body1"} className={bem.Children("name")}>{name}</Typography>
            <Typography align={"center"} variant={"caption"}
                        className={bem.Children("subTitle")}>{subTitle}</Typography>
        </div>
    )
};
export default AvatarUser;