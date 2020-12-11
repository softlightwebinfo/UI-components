// Generated with util/create-component.js
import React from "react";
import { ProgressProps } from "./Progress.types";
import "./Progress.scss";
import { BEM } from "../../libs/BEM";

const Progress: React.FC<ProgressProps> = (
    {
        className, color, position, value, style, children
    }) => {
        const bem = new BEM("Progress", {
            position: position,
        });
        bem.Append(className);
        const property = position == "vertical" ? "height" : "width";
        return (
            <div
                style={style}
                className={bem.toString()}
            >
                <div style={{[property]: `${value}%`, backgroundColor: color}} className={bem.Children("bar")}/>
            </div>
        )
    }
;
export default Progress;