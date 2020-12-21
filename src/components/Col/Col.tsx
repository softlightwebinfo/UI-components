// Generated with util/create-component.js
import React from "react";
import { ColProps } from "./Col.types";
import "./Col.scss";
import { BEM } from "../../libs/BEM";

const Col: React.FC<ColProps> = (
    {
        className,
        style,
        children,
        sm,
        md,
        auto,
        lg,
        xl,
        xs,
        alignSelf,
        grow,
        skrink,
        col,
        paddingBottom,
    }) => {
    const bem = new BEM("Col", {
        [col]: !!col,
        xs: xs.toString(),
        sm: sm.toString(),
        md: md.toString(),
        lg: lg.toString(),
        xl: xl.toString(),
        auto: auto,
        alignSelf: alignSelf,
        grow: grow,
        noGrow: !grow,
        skrink: skrink,
        noSkrink: !skrink,
        paddingBottom: paddingBottom,
    });
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {children}
        </div>
    )
};
export default Col;