// Generated with util/create-component.js
import React from "react";
import { ClampsProps } from "./Clamps.types";
import "./Clamps.scss";
import { BEM } from "../../libs/BEM";
import { Clamp } from "../index";

const Clamps: React.FC<ClampsProps> = ({className, onClick, numbers, style}) => {
    const bem = new BEM("Clamps", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {[...new Array(numbers)].map((value, index) => (
                <Clamp key={index} onClick={() => onClick(index)}/>
            ))}
        </div>
    )
};
export default Clamps;