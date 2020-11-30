// Generated with util/create-component.js
import React from "react";
import OrderedList from "./OrderedList";
import { ListItem } from "../index";

export default {
    title: "OrderedList"
};
export const Default = () => (
    <OrderedList>
        <ListItem>Test list 1</ListItem>
        <ListItem>Test list 2</ListItem>
        <ListItem>Test list 3</ListItem>
        <ListItem>Test
            list 4</ListItem>
        <ListItem>Test list 5</ListItem>
    </OrderedList>
);
export const ArrayList = () => (
    <OrderedList
        rows={[...new Array(10)].map((_, index) => ({children: `Hola indice numero: ${index}`}))}
    />
);
