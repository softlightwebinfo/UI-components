// Generated with util/create-component.js
import React from "react";
import { TabSidebarProps } from "./TabSidebar.types";
import "./TabSidebar.scss";
import { BEM } from "../../libs/BEM";
import { Tab } from "../../index";

const TabSidebar: React.FC<TabSidebarProps> = ({className, children, ...props}) => {
    const bem = new BEM("TabSidebar", {});
    bem.Append(className);
    return (
        <Tab component={"div"} {...props} className={bem.toString()}>{children}</Tab>
    )
};
export default TabSidebar;