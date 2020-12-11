// Generated with util/create-component.js
import React from "react";
import { MiniStatWidProps } from "./MiniStatWid.types";
import "./MiniStatWid.scss";
import { BEM } from "../../libs/BEM";
import { Avatar, Card, Typography } from "../index";

const MiniStatWid: React.FC<MiniStatWidProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("MiniStatWid", {});
    bem.Append(className);
    const Component = props.card ? Card : "div"
    return (
        <Component
            style={style}
            className={bem.toString()}
            isBody
        >
            <div className={bem.Children("content")}>
                <Typography variant={"caption"}>{props.title}</Typography>
                <Typography component={"h4"}>{props.subTitle}</Typography>
            </div>
            <div className={bem.Children("icon")}>
                <Avatar name={props.icon}/>
            </div>
        </Component>
    )
};
export default MiniStatWid;