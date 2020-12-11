// Generated with util/create-component.js
import React from "react";
import { TabListProps } from "./TabList.types";
import "./TabList.scss";
import { BEM } from "../../libs/BEM";

const TabList: React.FC<TabListProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("TabList", {});
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
export default TabList;