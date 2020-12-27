// Generated with util/create-component.js
import React, { useEffect, useState } from "react";
import { TimerProps } from "./Timer.types";
import "./Timer.scss";
import { BEM } from "../../libs/BEM";
import moment from "moment";

const Timer: React.FC<TimerProps> = ({className, style, ...props}) => {
    const format = "YYYY-MM-DD HH:mm:ss";
    const [date, setDate] = useState<string>(moment().format(format));
    const bem = new BEM("Timer", {});
    bem.Append(className);
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(moment().format(format));
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <span
            style={style}
            className={bem.toString()}
        >
            {date}
        </span>
    )
};
export default Timer;