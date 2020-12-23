// Generated with util/create-component.js
import React from "react";
import { FaqProps } from "./Faq.types";
import "./Faq.scss";
import { BEM } from "../../libs/BEM";
import { Typography } from "../index";

const Faq: React.FC<FaqProps> = ({className, index = 1, title, description, style, children}) => {
    const bem = new BEM("Faq", {});
    bem.Append(className);
    const content = `${index}. ${title}`;
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <Typography component={"h4"}>{content}</Typography>
            <Typography>{description}</Typography>
        </div>
    )
};
export default Faq;