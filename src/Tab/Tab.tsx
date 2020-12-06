// Generated with util/create-component.js
import React from "react";
import { TabProps } from "./Tab.types";
import "./Tab.scss";
import { BEM } from "../assets/libs/BEM";

const Tab: React.FC<TabProps> = ({className, component, onSelect, style, children, ...props}) => {
    const bem = new BEM("Tab", {
        selected: !!props.isSelected
    });
    bem.Append(className);
    const Component = component || "span"
    return (
        <Component
            id={props.id}
            style={style}
            className={bem.toString()}
            onClick={onSelect}
        >
            {children}
        </Component>
    )
};
export default Tab;