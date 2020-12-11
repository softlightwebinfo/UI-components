// Generated with util/create-component.js
import React from "react";
import { ProgressProps } from "./Progress.types";
import "./Progress.scss";
import { BEM } from "../../libs/BEM";

const Progress: React.FC<ProgressProps> = ({className, value, style, children}) => {
    const bem = new BEM("Progress", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <div style={{width: `${value}%`}} className={bem.Children("bar")}/>
        </div>
    )
};
export default Progress;