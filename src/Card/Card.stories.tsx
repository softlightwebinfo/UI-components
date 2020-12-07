// Generated with util/create-component.js
import React from "react";
import Card from "./Card";
import { Avatar, Wrap, WrapItem } from "../index";

export default {
    title: "Card"
};
export const Default = () => <Card>Hello</Card>;
export const CardAvatar = () => (
    <Card style={{padding: 20}}>
        <Wrap>
            <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov"/>
            </WrapItem>
            <WrapItem>
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>
            </WrapItem>
            <WrapItem>
                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"/>
            </WrapItem>
            <WrapItem>
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba"/>
            </WrapItem>
            <WrapItem>
                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast"/>
            </WrapItem>
            <WrapItem>
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo"/>
            </WrapItem>
        </Wrap>
    </Card>
);
