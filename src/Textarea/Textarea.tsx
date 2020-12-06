// Generated with util/create-component.js
import React from "react";
import { TextareaProps } from "./Textarea.types";
import "./Textarea.scss";
import { BEM } from "../assets/libs/BEM";
import { Field } from "../index";

const Textarea: React.FC<TextareaProps> = ({className, children, ...props}) => {
    const bem = new BEM("Textarea", {});
    bem.Append(className);
    return (
        <Field {...props} className={bem.toString()}>
            <textarea
                placeholder={props.placeholder}
                className={bem.toString()}
            >
                {children}
            </textarea>
        </Field>
    )
};
export default Textarea;