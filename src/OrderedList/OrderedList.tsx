// Generated with util/create-component.js
import React from "react";
import { OrderedListProps } from "./OrderedList.types";
import "./OrderedList.scss";
import { BEM } from "../assets/libs/BEM";
import ListItem from "../ListItem/ListItem";

const OrderedList: React.FC<OrderedListProps> = (
    {
        className,
        style,
        children,
        rows
    }) => {
    const bem = new BEM("OrderedList", {});
    bem.Append(className);
    return (
        <ol
            style={style}
            className={bem.toString()}
        >
            {rows && rows.map((row, index) => (
                <ListItem key={index} {...row}/>
            ))}
            {children}
        </ol>
    )
};
export default OrderedList;