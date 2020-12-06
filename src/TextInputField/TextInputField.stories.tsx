// Generated with util/create-component.js
import React from "react";
import TextInputField from "./TextInputField";

export default {
    title: "TextInputField"
};
export const Default = () => (
    <TextInputField
        label={"A required text input field"}
    />
);
export const Complete = () => (
    <TextInputField
        label={"A required text input field"}
        description={"This is a description."}
        required
        isValid={false}
        validationMessage={"This field is required"}
        hint="This is a hint."
    />
);
