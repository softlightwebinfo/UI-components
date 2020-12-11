// Generated with util/create-component.js
import React from "react";
import { TypographyProps } from "./Typography.types";
import "./Typography.scss";
import { BEM } from "../../libs/BEM";
import { mappingTypography } from "../../mappings/mappings";


const Typography: React.FC<TypographyProps> = ({className, style, ...props}) => {
    const bem = new BEM("Typography", {
        'gutter-bottom': props.gutterBottom,
        'no-wrap': props.noWrap,
        'color': props.color,
        display: props.display,
        align: props.align,
        [props.variant || "div"]: !!props.variant,
    });
    let Component: any = props.component || props.variant || "p";
    Component = mappingTypography[Component] || "div";
    bem.Append(className);
    return (
        <Component
            onClick={props.onClick}
            style={style}
            className={bem.toString()}
        >
            {props.children}
        </Component>
    )
};
export default Typography;