// Generated with util/create-component.js
import React from "react";
import { DividerProps } from "./Divider.types";
import "./Divider.scss";
import { BEM } from "../assets/libs/BEM";

const Divider: React.FC<DividerProps> = ({className, orientation, style}) => {
    const bem = new BEM("Divider", {
        [orientation]: !!orientation,
    });
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()}>
            <hr/>
        </div>
    )
};
export default Divider;