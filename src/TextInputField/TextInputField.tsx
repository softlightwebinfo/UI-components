// Generated with util/create-component.js
import React from "react";
import { TextInputFieldProps } from "./TextInputField.types";
import "./TextInputField.scss";
import { BEM } from "../assets/libs/BEM";
import { AlertText, Label, SpanTitleText, Typography } from "../index";

const TextInputField: React.FC<TextInputFieldProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("TextInputField", {});
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()}>
            <Label
                node={props.required && (
                    <SpanTitleText title={"This field is required"} text={" *"}/>
                )}
            >
                {props.label}
            </Label>
            {props.description && (
                <Typography
                    className={bem.Children("description")}
                    variant={"body2"}
                    color={"blue-2"}
                    component={"p"}
                >
                    {props.description}
                </Typography>
            )}
            <input
                type="text"
                value={props.value}
                placeholder={props.placeholder}
                required={props.required}
                id={props.id}
                onChange={props.onChange}
            />
            {props.hint && <Typography className={bem.Children("hint")} variant={"body2"} color={"blue-2"} component={"p"}>{props.hint}</Typography>}
            {!props.isValid && <AlertText message={props.validationMessage}/>}
        </div>
    )
};
export default TextInputField;