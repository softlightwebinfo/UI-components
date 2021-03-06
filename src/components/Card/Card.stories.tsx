// Generated with util/create-component.js
import React from "react";
import Card from "./Card";
import { Avatar, Button, Circle, Wrap, WrapItem } from "../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
export const WithHeaderAndButton = () => (
    <Card
        icon={<Circle size={32}><FontAwesomeIcon icon={faUser}/></Circle>}
        title={"Contact details"}
        actions={<Button element onClick={console.log}>New</Button>}
    />
);
