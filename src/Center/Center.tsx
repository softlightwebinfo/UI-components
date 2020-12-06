// Generated with util/create-component.js
import React from "react";
import {CenterProps} from "./Center.types";
import "./Center.scss";
import { BEM } from "../assets/libs/BEM";

const Center: React.FC<CenterProps> = ({className, style, children}) => {
    const bem = new BEM("Center", {});
    bem.Append(className);
    return(
        <div style={style} className={bem.toString()} data-testid="Center">{children}</div>
    )
};
export default Center;