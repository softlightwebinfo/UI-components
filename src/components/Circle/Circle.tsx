// Generated with util/create-component.js
import React from "react";
import { CircleProps } from "./Circle.types";
import "./Circle.scss";
import { BEM } from "../../libs/BEM";

const Circle: React.FC<CircleProps> = ({className, size, style, children}) => {
    const bem = new BEM("Circle", {});
    bem.Append(className);
    return (
        <div style={{
            ...style,
            width: size,
            height: size,
        }} className={bem.toString()}>
            {children}
        </div>
    )
};
export default Circle;