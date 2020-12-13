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
        routeKey,
        onClick,
        icons,
    }) => {
    const bem = new BEM("Menu", {
        icons: icons,
    });
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
                    <li key={key} className={bem.Modifier("item", "active", split.includes(key))}>
                        <span onClick={() => onClick && onClick(key, value, index)}>
                            {value.label}
                            {value.menu && (<FontAwesomeIcon icon={faChevronDown}/>)}
                        </span>
                        {value.menu && <Menu onClick={onClick} routeKey={key} active={active} menu={value.menu}/>}
                    </li>
                )
            })}
        </ul>
    )
};
export default Menu;