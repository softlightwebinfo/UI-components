// Generated with util/create-component.js
import React from "react";
import { UnorderedListProps } from "./UnorderedList.types";
import "./UnorderedList.scss";
import { BEM } from "../assets/libs/BEM";
import ListItem from "../ListItem/ListItem";

const UnorderedList: React.FC<UnorderedListProps> = (
    {
        className,
        style,
        children,
        rows
    }) => {
    const bem = new BEM("UnorderedList", {});
    bem.Append(className);
    return (
        <ul
            style={style}
            className={bem.toString()}
        >
            {rows && rows.map((row, index) => (
                <ListItem key={index} {...row}/>
            ))}
            {children}
        </ul>
    )
};
export default UnorderedList;