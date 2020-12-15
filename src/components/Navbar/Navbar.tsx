// Generated with util/create-component.js
import React from "react";
import { NavbarProps } from "./Navbar.types";
import "./Navbar.scss";
import { BEM } from "../../libs/BEM";
import { Button, Typography } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC<NavbarProps> = (
    {
        className,
        style,
        children,
        onClickMenu,
        left,
        right,
        title,
    }) => {
    const bem = new BEM("Navbar", {});
    bem.Append(className);
    return (
        <header
            style={style}
            className={bem.toString()}
        >
            {onClickMenu && <Button hasIcon onClick={onClickMenu}><FontAwesomeIcon icon={faBars}/></Button>}
            {children}
            {(title || left) && (
                <div className={bem.Children("left")}>
                    {title && <Typography component={"h1"}>{title}</Typography>}
                    {left}
                </div>
            )}
            {right && <div className={bem.Children("right")}>{right}</div>}
        </header>
    )
};
export default Navbar;