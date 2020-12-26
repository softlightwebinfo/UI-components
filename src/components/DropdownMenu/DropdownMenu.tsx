// Generated with util/create-component.js
import React from "react";
import { DropdownMenuProps } from "./DropdownMenu.types";
import "./DropdownMenu.scss";
import { BEM } from "../../libs/BEM";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropdownMenu: React.FC<DropdownMenuProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("DropdownMenu", {});
    bem.Append(className);
    return (
        <ul
            style={style}
            className={bem.toString()}
        >
            {props.menu.map((value, index) => {
                let component = (
                    <>
                        {value.icon && (<FontAwesomeIcon icon={value.icon}/>)}
                        {value.label}
                    </>
                );
                const wrapper = props.wrapperRow?.(component, value) ?? component;
                return (
                    <li
                        onClick={props.onClick}
                        className={bem.Modifier("item", "separator", value.separator)}
                    >
                        {wrapper}
                    </li>
                );
            })}
        </ul>
    )
};
export default DropdownMenu;