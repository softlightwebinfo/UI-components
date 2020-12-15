// Generated with util/create-component.js
import React from "react";
import { TextInputProps } from "./TextInput.types";
import "./TextInput.scss";
import { BEM } from "../../libs/BEM";

const TextInput: React.FC<TextInputProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("TextInput", {});
    bem.Append(className);
    return (
        <input
            type={props.type}
            required={props.required}
            style={style}
            className={bem.toString()}
            value={props.value}
            onChange={props.onChange}
            onKeyUp={props.onKeyUp}
            onKeyDown={props.onKeyDown}
            onKeyPress={props.onKeyPress}
            placeholder={props.placeholder}
        />
    )
};
export default TextInput;