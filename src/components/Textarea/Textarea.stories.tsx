// Generated with util/create-component.js
import React from "react";
import Textarea from "./Textarea";
import TextInputField from "../TextInputField/TextInputField";

export default {
    title: "Textarea"
};

export const Default = () => (
    <Textarea
        label={"A required text input field"}
    />
);

export const Complete = () => (
    <Textarea
        placeholder={"Text example"}
        label={"A required text input field"}
        description={"This is a description."}
        required
        isValid={false}
        validationMessage={"This field is required"}
        hint="This is a hint."
    />
);
