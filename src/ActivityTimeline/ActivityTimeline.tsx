// Generated with util/create-component.js
import React from "react";
import {ActivityTimelineProps} from "./ActivityTimeline.types";
import "./ActivityTimeline.scss";
import { BEM } from "../assets/libs/BEM";

const ActivityTimeline: React.FC<ActivityTimelineProps> = ({className, style, children}) => {
    const bem = new BEM("ActivityTimeline", {});
    bem.Append(className);
    return(
        <ul
            style={style}
            className={bem.toString()}
        >
            {children}
        </ul>
    )
};
export default ActivityTimeline;