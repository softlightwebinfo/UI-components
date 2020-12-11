// Generated with util/create-component.js
import React from "react";
import { ListItemProps } from "./ListItem.types";
import "./ListItem.scss";
import { BEM } from "../../libs/BEM";

const ListItem: React.FC<ListItemProps> = ({className, style, children}) => {
    const bem = new BEM("ListItem", {});
    bem.Append(className);
    return (
        <li style={style} className={bem.toString()}>{children}</li>
    )
};
export default ListItem;