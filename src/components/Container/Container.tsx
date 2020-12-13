// Generated with util/create-component.js
import React from "react";
import {ContainerProps} from "./Container.types";
import "./Container.scss";
import { BEM } from "../../libs/BEM";

const Container: React.FC<ContainerProps> = ({className, style, children}) => {
    const bem = new BEM("Container", {});
    bem.Append(className);
    return(
        <div style={style} className={bem.toString()} data-testid="Container">{children}</div>
    )
};
export default Container;