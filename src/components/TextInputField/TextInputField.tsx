// Generated with util/create-component.js
import React from "react";
import { TextInputFieldProps } from "./TextInputField.types";
import "./TextInputField.scss";
import { BEM } from "../../libs/BEM";
import { Field } from "../../index";
import { formFieldHooks } from "../../hooks/FormField";

const TextInputField: React.FC<TextInputFieldProps> = ({className, children, ...props}) => {
    const bem = new BEM("TextInputField", {});
    bem.Append(className);
    const {onChange} = formFieldHooks({id: props.id, onChange: props.onChange, value: props.value});
    return (
        <Field {...props} className={bem.toString()}>
            <input
                type="text"
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
                id={props.id}
                onChange={onChange}
            />
        </Field>
    )
};
export default TextInputField;