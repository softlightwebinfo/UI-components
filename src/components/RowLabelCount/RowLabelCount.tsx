// Generated with util/create-component.js
import React from "react";
import { RowLabelCountProps } from "./RowLabelCount.types";
import "./RowLabelCount.scss";
import { BEM } from "../../libs/BEM";
import { Badge, Flex, Typography } from "../index";

const RowLabelCount: React.FC<RowLabelCountProps> = (
    {
        className,
        style,
        label,
        title,
    }) => {
    const bem = new BEM("RowLabelCount", {});
    bem.Append(className);
    return (
        <Flex
            style={style}
            className={bem.toString()}
        >
            <Typography>{title}</Typography>
            <Badge variant={"solid"} color={"info"}>{label}</Badge>
        </Flex>
    )
};
export default RowLabelCount;