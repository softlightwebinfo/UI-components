// Generated with util/create-component.js
import React from "react";
import { TimelineMarkerProps } from "./TimelineMarker.types";
import "./TimelineMarker.scss";
import { BEM } from "../assets/libs/BEM";
import { Typography } from "../index";

const TimelineMarker: React.FC<TimelineMarkerProps> = ({className, style, children, ...props}) => {
    const bem = new BEM("TimelineMarker", {});
    bem.Append(className);
    return (
        <li style={style} className={bem.toString()}>
            <div className={bem.Children("left")}>
                <span className={bem.Children("icon")}>{props.icon}</span>
            </div>
            <div className={bem.Children("right")}>
                <header className={bem.Children("header")}>
                    <Typography component={"h3"} variant={"body1"}>{props.label}</Typography>
                    <Typography component={"p"} variant={"caption"}>{props.datetime}</Typography>
                </header>
                <section className={bem.Children("section")}>
                    <Typography
                        className={bem.Children("description")}
                        variant={"body2"}
                    >
                        {props.description}
                    </Typography>
                    {children && <div className={bem.Children("children")}>{children}</div>}
                </section>
                {/*<footer></footer>*/}
            </div>
        </li>
    )
};
export default TimelineMarker;