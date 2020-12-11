// Generated with util/create-component.js
import React from "react";
import { FlexProps } from "./Flex.types";
import "./Flex.scss";
import { BEM } from "../../libs/BEM";

const Flex: React.FC<FlexProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("Flex", {

    });
    bem.Append(className);
    return (
        <div style={style} className={bem.toString()} data-testid="Flex">{children}</div>
    )
};
export default Flex;