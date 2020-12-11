// Generated with util/create-component.js
import React from "react";
import TextInputField from "./Field";
import Field from "./Field";

export default {
    title: "Field"
};
export const Default = () => (
    <Field
        label={"A required text input field"}
    />
);
export const Complete = () => (
    <Field
        label={"A required text input field"}
        description={"This is a description."}
        required
        isValid={false}
        validationMessage={"This field is required"}
        hint="This is a hint."
    />
);
