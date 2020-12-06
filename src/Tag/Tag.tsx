// Generated with util/create-component.js
import React from "react";
import { TagProps } from "./Tag.types";
import "./Tag.scss";
import { BEM } from "../assets/libs/BEM";
import { Badge } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Tag: React.FC<TagProps> = (
    {
        className,
        variant = "solid",
        color = "default",
        style,
        children,
        ...props
    }) => {
    const bem = new BEM("Tag", {});
    bem.Append(className);
    return (
        <Badge
            variant={variant}
            color={color}
            style={style}
            className={bem.toString()}
        >
            {children}
            <FontAwesomeIcon onClick={props.onClick} icon={faTimes}/>
        </Badge>
    )
};
export default Tag;