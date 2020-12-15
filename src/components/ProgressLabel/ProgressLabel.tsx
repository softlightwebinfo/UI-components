// Generated with util/create-component.js
import React from "react";
import { ProgressLabelProps } from "./ProgressLabel.types";
import "./ProgressLabel.scss";
import { BEM } from "../../libs/BEM";
import { Flex, Progress, Typography } from "../index";

const ProgressLabel: React.FC<ProgressLabelProps> = (
    {
        value,
        className,
        style,
        label,
    }) => {
    const bem = new BEM("ProgressLabel", {});
    bem.Append(className);
    return (
        <div
            style={style}
            className={bem.toString()}
        >
            <Flex>
                <Typography className={bem.Children("label")} variant={"caption"}>{label}</Typography>
                <span>{value} %</span>
            </Flex>
            <Progress value={value}/>
        </div>
    )
};
export default ProgressLabel;