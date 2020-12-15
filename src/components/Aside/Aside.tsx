// Generated with util/create-component.js
import React from "react";
import { AsideProps } from "./Aside.types";
import "./Aside.scss";
import { BEM } from "../../libs/BEM";
import { AsideHeader, AvatarUser } from "../index";

const Aside: React.FC<AsideProps> = (
    {
        className,
        style,
        children,
        header,
        user,
    }) => {
    const bem = new BEM("Aside", {});
    bem.Append(className);
    return (
        <aside
            style={style}
            className={bem.toString()}
        >
            {header && <AsideHeader {...header}/>}
            {user && <AvatarUser {...user}/>}
            {children}
        </aside>
    )
};
export default Aside;