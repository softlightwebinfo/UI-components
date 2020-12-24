// Generated with util/create-component.js
import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.scss";
import { BEM } from "../../libs/BEM";

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
        hasIcon,
        custom,
        ...props
    }) => {
    const bem = new BEM("Button", {
        appearance: props.appearance,
        // size: props,
        icon: !!hasIcon,
        element,
        size: size.toString(),
        [color]: variant == "outline" && !!color,
        bg: variant == "solid" && color,
        [variant]: !!variant,
        [colorText]: !!colorText,
        custom: custom,
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