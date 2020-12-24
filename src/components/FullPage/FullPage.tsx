// Generated with util/create-component.js
import React from "react";
import {FullPageProps} from "./FullPage.types";
import "./FullPage.scss";
import { BEM } from "../../libs/BEM";

const FullPage: React.FC<FullPageProps> = ({className, style, children}) => {
    const bem = new BEM("FullPage", {});
    bem.Append(className);
    return(
        <div style={style} className={bem.toString()} data-testid="FullPage">{children}</div>
    )
};
export default FullPage;