// Generated with util/create-component.js
import React from "react";
import { SpanTitleTextProps } from "./SpanTitleText.types";
import "./SpanTitleText.scss";
import { BEM } from "../assets/libs/BEM";

const SpanTitleText: React.FC<SpanTitleTextProps> = ({title, text, className, style, children}) => {
    const bem = new BEM("SpanTitleText", {});
    bem.Append(className);
    return (
        <span title={title} style={style} className={bem.toString()}>{text}</span>
    )
};
export default SpanTitleText;