// Generated with util/create-component.js
import React from "react";
import { MenuProps } from "./Menu.types";
import "./Menu.scss";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Menu: React.FC<MenuProps> = (
    {
        className,
        active,
        menu,
        style,
        routeKey
    }) => {
    const bem = new BEM("Menu", {});
    bem.Append(className);
    const split = active.split("/");
    return (
        <ul
            data-route-key={routeKey}
            style={style}
            className={bem.toString()}
        >
            {Object.entries(menu).map(([key, value], index) => {
                return (
                    <li className={bem.Modifier("item", "active", split.includes(key))}>
                        <span>
                            {value.label}
                            {value.menu && (<FontAwesomeIcon icon={faChevronDown}/>)}
                        </span>
                        {value.menu && <Menu routeKey={key} active={active} menu={value.menu}/>}
                    </li>
                )
            })}
        </ul>
    )
};
export default Menu;