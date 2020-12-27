// Generated with util/create-component.js
import React from "react";
import { HeaderLayoutProps } from "./HeaderLayout.types";
import "./HeaderLayout.scss";
import { BEM } from "../../libs/BEM";
import { HeaderHorizontal, HeaderHorizontalMain, HeaderHorizontalNav } from "../../components";

const HeaderLayout: React.FC<HeaderLayoutProps> = (
    {
        className,
        style,
        headerTop,
        headerMain,
        headerNav,
    }) => {
    const bem = new BEM("HeaderLayout", {});
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()}>
            <HeaderHorizontal {...headerTop}/>
            <HeaderHorizontalMain {...headerMain}/>
            <HeaderHorizontalNav {...headerNav}/>
        </div>
    )
};

export default HeaderLayout;