// Generated with util/create-component.js
import React from "react";
import {SquareProps} from "./Square.types";
import "./Square.scss";
import { BEM } from "../../libs/BEM";

const Square: React.FC<SquareProps> = ({className, style, children}) => {
    const bem = new BEM("Square", {});
    bem.Append(className);
    return(
        <div style={style} className={bem.toString()} data-testid="Square">{children}</div>
    )
};
export default Square;