// Generated with util/create-component.js
import React from "react";
import { TextInputFieldProps } from "./TextInputField.types";
import "./TextInputField.scss";
import { BEM } from "../assets/libs/BEM";
import { Field } from "../index";

const TextInputField: React.FC<TextInputFieldProps> = ({className, children, ...props}) => {
    const bem = new BEM("TextInputField", {});
    bem.Append(className);
    return (
        <Field {...props} className={bem.toString()}>
            <input
                type="text"
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
                id={props.id}
                onChange={props.onChange}
            />
        </Field>
    )
};
export default TextInputField;