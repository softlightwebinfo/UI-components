// Generated with util/create-component.js
import React from "react";
import { PasswordInputFieldProps } from "./PasswordInputField.types";
import "./PasswordInputField.scss";
import { BEM } from "../../libs/BEM";
import { formFieldHooks } from "../../hooks/FormField";
import { Field } from "../index";

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({className, style, ...props}) => {
    const bem = new BEM("PasswordInputField", {});
    bem.Append(className);
    const {onChange, value} = formFieldHooks({id: props.id, onChange: props.onChange, value: props.value});
    return (
        <Field {...props} className={bem.toString()}>
            <input
                type="password"
                value={value}
                placeholder={props.placeholder}
                required={props.required}
                id={props.id}
                onChange={onChange}
            />
        </Field>
    )
};
export default PasswordInputField;