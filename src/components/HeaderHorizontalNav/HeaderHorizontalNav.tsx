// Generated with util/create-component.js
import React from "react";
import { HeaderHorizontalNavProps } from "./HeaderHorizontalNav.types";
import "./HeaderHorizontalNav.scss";
import { BEM } from "../../libs/BEM";
import { Container, Menu } from "../index";

const HeaderHorizontalNav: React.FC<HeaderHorizontalNavProps> = ({className, rowsLeft, rowsRight, style, children}) => {
    const bem = new BEM("HeaderHorizontalNav", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <Container>
                <nav className={bem.Children("nav")}>
                    <Menu {...rowsLeft}/>
                    <Menu {...rowsRight}/>
                </nav>
            </Container>
        </div>
    )
};
export default HeaderHorizontalNav;