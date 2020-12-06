// Generated with util/create-component.js
import React from "react";
import { FieldProps } from "./Field.types";
import "./Field.scss";
import { BEM } from "../assets/libs/BEM";
import { AlertText, Label, SpanTitleText, Typography } from "../index";

const Field: React.FC<FieldProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("Field", {});
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()}>
            {props.label && (
                <Label
                    node={props.required && (
                        <SpanTitleText title={"This field is required"} text={" *"}/>
                    )}
                >
                    {props.label}
                </Label>
            )}
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
            {children}
            {props.hint && (
                <Typography
                    className={bem.Children("hint")}
                    variant={"body2"}
                    color={"blue-2"}
                    component={"p"}
                >
                    {props.hint}
                </Typography>
            )}
            {!props.isValid && props.isValid != undefined && <AlertText message={props.validationMessage}/>}
        </div>
    )
};
export default Field;