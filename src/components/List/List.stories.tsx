// Generated with util/create-component.js
import React from "react";
import List from "./List";
import { ListItem } from "../../index";

export default {
    title: "List"
};
export const Default = () => (
    <List>
        <ListItem>Test 1</ListItem>
        <ListItem>Default</ListItem>
        <ListItem>Money</ListItem>
    </List>
);
export const DefaultListOrder = () => (
    <List isOrder={true}>
        <ListItem>Test 1</ListItem>
        <ListItem>Default</ListItem>
        <ListItem>Money</ListItem>
    </List>
);
export const DefaultListUnOrder = () => (
    <List isOrder={false}>
        <ListItem>Test 1</ListItem>
        <ListItem>Default</ListItem>
        <ListItem>Money</ListItem>
    </List>
);
export const ArrayList = () => (
    <List
        rows={[...new Array(10)].map((_, index) => ({
            children: `Test index ${index}`
        }))}
    />
);
