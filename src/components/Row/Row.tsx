// Generated with util/create-component.js
import React from "react";
import { RowProps } from "./Row.types";
import "./Row.scss";
import { BEM } from "../../libs/BEM";

const Row: React.FC<RowProps> = (
    {
        className,
        style,
        children,
        grid,
        ...props
    }) => {
    const bem = new BEM("Row", {
        grid: grid,
        marginCollapse: props.marginCollapse,
        smVertical: props.smVertical,
        mdVertical: props.mdVertical,
        lgVertical: props.lgVertical,
        reverse: props.reverse,
        alignContent: props.alignContent,
        alignItems: props.alignItems,
    });
    bem.Append(className);
    return (
        <section
            style={style}
            className={bem.toString()}
        >
            {children}
        </section>
    )
};
export default Row;