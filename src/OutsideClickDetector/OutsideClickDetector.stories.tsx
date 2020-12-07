// Generated with util/create-component.js
import React from "react";
import OutsideClickDetector from "./OutsideClickDetector";
import { Card } from "../index";

export default {
    title: "OutsideClickDetector"
};
export const Default = () => (
    <OutsideClickDetector onOutsideClick={() => console.log("Click outside")}>
        <Card>
            Click outside or scape button
        </Card>
    </OutsideClickDetector>
);
