// Generated with util/create-component.js
import React from "react";
import HeaderHorizontal from "./HeaderHorizontal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

export default {
    title: "HeaderHorizontal"
};
export const Default = () => (
    <HeaderHorizontal
        message={{
            icon: <FontAwesomeIcon icon={faFire}/>,
            message: "A new version will be released on December 25th. Stay tuned!"
        }}
        rows={{
            rows: [
                {children: "LOGIN"},
                {children: "SIGNUP"},
            ]
        }}
    />
);
