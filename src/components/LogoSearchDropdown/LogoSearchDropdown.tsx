// Generated with util/create-component.js
import React from "react";
import { LogoSearchDropdownProps } from "./LogoSearchDropdown.types";
import "./LogoSearchDropdown.scss";
import { BEM } from "../../libs/BEM";
import { Logo, SearchDropdown } from "../index";

const LogoSearchDropdown: React.FC<LogoSearchDropdownProps> = ({className, input, logo, style, children}) => {
    const bem = new BEM("LogoSearchDropdown", {});
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()}>
            <Logo
                className={bem.Children("logo")}
                {...logo}
            />
            <SearchDropdown
                className={bem.Children("dropdown")}
                {...input}
            />
        </div>
    )
};
export default LogoSearchDropdown;