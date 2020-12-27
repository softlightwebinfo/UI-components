// Generated with util/create-component.js
import React from "react";
import Toast from "./Toast";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "Toast"
};
export const Default = () => (
    <Toast
        icon={faUser}
        title={"Update Successfully"}
        message={"Your profile has been successfully update"}
        type={"error"}
    />
);
