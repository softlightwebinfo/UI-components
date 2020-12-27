// Generated with util/create-component.js
import React from "react";
import ToastContainer from "./ToastContainer";
import { ContextProvider } from "../index";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "ToastContainer"
};
export const Default = () => (
    <ContextProvider translations={{}} lang={"en"} notifications={[
        {
            icon: faUser,
            title: "Update Successfully",
            message: "Your profile has been successfully update",
            type: "error"
        }
    ]}>
        <ToastContainer/>
    </ContextProvider>
);
