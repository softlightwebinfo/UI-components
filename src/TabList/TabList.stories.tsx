// Generated with util/create-component.js
import React, { useState } from "react";
import TabList from "./TabList";
import { Pane, Tab, TabContent, TabSidebar } from "../index";

export default {
    title: "TabList"
};
export const Default = () => {
    const [tabObj, setTabObj] = useState({
        selectedIndex: 1,
        tags: ["Panel 1", "Panel 2", "Panel 3"]
    });
    return (
        <div>
            <TabList>
                {tabObj.tags.map(((tab, index) => (
                    <Tab
                        key={tab}
                        id={tab}
                        onSelect={() => setTabObj(e => ({tags: e.tags, selectedIndex: index}))}
                        isSelected={index === tabObj.selectedIndex}
                        aria-control={`panel-${tab}`}
                    >
                        {tab}
                    </Tab>
                )))}
            </TabList>
            <TabContent selected={tabObj.selectedIndex}>
                <div>Panel number 1</div>
                <div>Panel number 2</div>
                <div>Panel number 3</div>
            </TabContent>
        </div>
    );
}
export const Sidebar = () => {
    const [tabObj, setTabObj] = useState({
        selectedIndex: 1,
        tags: ["Traits", "Event History", "Identities"]
    });
    return (
        <Pane flex height={240}>
            <TabList>
                {tabObj.tags.map(((tab, index) => (
                    <TabSidebar
                        key={tab}
                        id={tab}
                        onSelect={() => setTabObj(e => ({tags: e.tags, selectedIndex: index}))}
                        isSelected={index === tabObj.selectedIndex}
                        aria-control={`panel-${tab}`}
                    >
                        {tab}
                    </TabSidebar>
                )))}
            </TabList>
            <TabContent selected={tabObj.selectedIndex}>
                <div>Panel number 1</div>
                <div>Panel number 2</div>
                <div>Panel number 3</div>
            </TabContent>
        </Pane>
    );
}