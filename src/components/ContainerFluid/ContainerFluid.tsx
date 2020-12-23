// Generated with util/create-component.js
import React from "react";
import { ContainerFluidProps } from "./ContainerFluid.types";
import "./ContainerFluid.scss";
import { BEM } from "../../libs/BEM";

const ContainerFluid: React.FC<ContainerFluidProps> = ({className, style, children}) => {
    const bem = new BEM("ContainerFluid", {});
    bem.Append(className);
    return (
        <section style={style} className={bem.toString()}>{children}</section>
    )
};
export default ContainerFluid;