// Generated with util/create-component.js
import React from "react";
import Notification from "./Notification";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Notification"
};
export const Default = () => (
    <Notification
        message={"Your profile has been successfully update"}
    />
);
export const Title = () => (
    <Notification
        title={"Update Successfully"}
        message={"Your profile has been successfully update"}
    />
);

export const Error = () => (
    <Notification
        type={"error"}
        title={"Update Successfully"}
        message={"Your profile has been successfully update"}
    />
);
export const Icon = () => (
    <Notification
        icon={faUser}
        title={"Update Successfully"}
        message={"Your profile has been successfully update"}
    />
);
export const All = () => (
    <Notification
        icon={faUser}
        title={"Update Successfully"}
        message={"Your profile has been successfully update"}
        type={"error"}
        onDismiss={() => {

        }}
    />
);
