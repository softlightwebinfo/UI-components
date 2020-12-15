// Generated with util/create-component.js
import React from "react";
import { TabContentProps } from "./TabContent.types";
import "./TabContent.scss";
import { BEM } from "../../libs/BEM";

const TabContent: React.FC<TabContentProps> = (
    {
        className,
        selected,
        style,
        children
    }) => {
    const bem = new BEM("TabContent", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            {React.Children.map(children, (child, index) => {
                if (index != selected) return null;
                return child;
            })}
        </div>
    )
};
export default TabContent;