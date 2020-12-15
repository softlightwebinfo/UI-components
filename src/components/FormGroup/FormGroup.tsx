// Generated with util/create-component.js
import React from "react";
import {FormGroupProps} from "./FormGroup.types";
import "./FormGroup.scss";
import { BEM } from "../../libs/BEM";

const FormGroup: React.FC<FormGroupProps> = ({className, style, children}) => {
    const bem = new BEM("FormGroup", {});
    bem.Append(className);
    return(
        <div style={style} className={bem.toString()}>{children}</div>
    )
};
export default FormGroup;