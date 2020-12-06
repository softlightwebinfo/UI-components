// Generated with util/create-component.js
import React from "react";
import { WrapItemProps } from "./WrapItem.types";
import "./WrapItem.scss";
import { BEM } from "../assets/libs/BEM";

const WrapItem: React.FC<WrapItemProps> = ({className, style, children}) => {
    const bem = new BEM("WrapItem", {});
    bem.Append(className);
    return (
        <li
            style={style}
            className={bem.toString()}
        >
            {children}
        </li>
    )
};
export default WrapItem;