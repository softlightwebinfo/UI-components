// Generated with util/create-component.js
import React from "react";
import { InfoProps } from "./Info.types";
import "./Info.scss";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../index";

const Info: React.FC<InfoProps> = ({className, style, ...props}) => {
    const {
        icon,
        title,
        description,
        horizontal,
    } = props;
    const bem = new BEM("Info", {
        horizontal: horizontal,
    });
    bem.Append(className);
    return (
        <article
            style={style}
            className={bem.toString()}
        >
            <div className={bem.Children("left")}>
                <FontAwesomeIcon className={bem.Children("icon")} icon={icon}/>
            </div>
            <div className={bem.Children("right")}>
                <Typography className={bem.Children("title")} variant={"body1"} component={"h5"}>{title}</Typography>
                <Typography className={bem.Children("description")} variant={"caption"}>{description}</Typography>
            </div>
        </article>
    )
};
export default Info;