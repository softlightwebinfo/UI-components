// Generated with util/create-component.js
import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";
import { BEM } from "../assets/libs/BEM";

const Button: React.FC<ButtonProps> = (
    {
        className,
        style,
        children,
        size = 32,
        variant,
        color,
        colorText,
        element,
        ...props
    }) => {
    const bem = new BEM("Button", {
        appearance: props.appearance,
        // size: props,
        element,
        size,
        [color]: variant == "outline" && !!color,
        bg: variant == "solid" && color,
        [variant]: !!variant,
        [colorText]: !!colorText
    });
    bem.Append(className);
    return (
        <button
            onClick={props.onClick}
            style={style}
            className={bem.toString()}
        >
            {children}
        </button>
    )
};
export default Button;