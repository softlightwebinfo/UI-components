// Generated with util/create-component.js
import React from "react";
import Navbar from "./Navbar";
import { Button, Typography } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommonsShare } from "@fortawesome/free-brands-svg-icons";

export default {
    title: "Navbar"
};
export const Default = () => (
    <Navbar
        onClickMenu={console.log}
    />
);
export const Left = () => (
    <Navbar
        onClickMenu={console.log}
        title={"TPV - CRM"}
        right={(
            <>
                <Button hasIcon><FontAwesomeIcon icon={faSearch}/></Button>
                <Button hasIcon><FontAwesomeIcon icon={faEnvelope}/></Button>
                <Button hasIcon><FontAwesomeIcon icon={faCreativeCommonsShare}/></Button>
            </>
        )}
    />
);
