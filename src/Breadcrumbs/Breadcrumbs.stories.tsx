// Generated with util/create-component.js
import React from "react";
import Breadcrumbs from "./Breadcrumbs";
import { Breadcrumb } from "../index";

export default {
    title: "Breadcrumbs"
};
export const Default = () => (
    <Breadcrumbs>
        <Breadcrumb label={"Home"} onClick={() => alert("Breadcrumb was clicked")}/>
        <Breadcrumb label={"Articles"}/>
    </Breadcrumbs>
);
