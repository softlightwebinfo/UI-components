// Generated with util/create-component.js
import React from "react";
import { SelectProps } from "./Select.types";
import "./Select.scss";
import { BEM } from "../assets/libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Select: React.FC<SelectProps> = ({className, value, onChange, style, children}) => {
    const bem = new BEM("Select", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {children}
            </select>
            <FontAwesomeIcon className={bem.Children("icon")} icon={faCaretDown}/>
        </div>
    )
};
export default Select;