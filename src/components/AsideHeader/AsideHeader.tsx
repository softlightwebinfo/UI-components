// Generated with util/create-component.js
import React from "react";
import { AsideHeaderProps } from "./AsideHeader.types";
import "./AsideHeader.scss";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../index";

const AsideHeader: React.FC<AsideHeaderProps> = (
    {
        className,
        style,
        children,
        logo,
    }) => {
    const bem = new BEM("AsideHeader", {});
    bem.Append(className);
    return (
        <header style={style} className={bem.toString()} data-testid="AsideHeader">
            <div className={bem.Children("logo")}>
                <img src={logo} alt=""/>
            </div>
            <div className={bem.Children("right")}>
                <Button hasIcon><FontAwesomeIcon icon={faBell}/></Button>
                <Button hasIcon><FontAwesomeIcon icon={faUser}/></Button>
            </div>
        </header>
    )
};
export default AsideHeader;