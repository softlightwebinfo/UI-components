// Generated with util/create-component.js
import React from "react";
import { TextareaProps } from "./Textarea.types";
import "./Textarea.scss";
import { BEM } from "../../libs/BEM";
import { Field } from "../../index";
import { formFieldHooks } from "../../hooks/FormField";

const Textarea: React.FC<TextareaProps> = ({className, children, ...props}) => {
    const bem = new BEM("Textarea", {});
    bem.Append(className);
    const {onChange} = formFieldHooks({id: props.id, onChange: props.onChange, value: props.value});
    return (
        <Field {...props} className={bem.toString()}>
            <textarea
                onChange={onChange}
                placeholder={props.placeholder}
                className={bem.toString()}
            >
                {children}
            </textarea>
        </Field>
    )
};
export default Textarea;