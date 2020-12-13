// Generated with util/create-component.js
import React from "react";
import { InviteFriendsWidgetProps } from "./InviteFriendsWidget.types";
import "./InviteFriendsWidget.scss";
import { BEM } from "../../libs/BEM";
import { Button, Card, Typography } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

const InviteFriendsWidget: React.FC<InviteFriendsWidgetProps> = (
    {
        className,
        style,
        title = "Reffer and Get Reward",
        description = "Reffer us to your friends and earn bonus when they join.",
    }) => {
    const bem = new BEM("InviteFriendsWidget", {});
    bem.Append(className);
    return (
        <Card
            dark
            isBody
            style={style}
            className={bem.toString()}
        >
            <FontAwesomeIcon icon={faBullhorn} className={bem.Children("icon")}/>
            <Typography align={"center"} color={"white"} component={"h3"}>{title}</Typography>
            <Typography align={"center"} color={"white"} variant={"caption"}>{description}</Typography>
            <Button variant={"solid"} color={"orange"} size={40} className={bem.Children("button")}>Invite Friends</Button>
        </Card>
    )
};
export default InviteFriendsWidget;