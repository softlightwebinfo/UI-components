// Generated with util/create-component.js
import React from "react";
import CardProgressBlock from "./CardProgressBlock";
import { Flex } from "../../components";

export default {
    title: "Layouts/CardProgressBlock"
};
export const Default = () => (
    <Flex spacing>
        <CardProgressBlock
            value={60}
            title={"Hypertensive Crisis"}
            subTitle={"Ongoing treatment"}
            date={"10 feb, 2020"}
        />
        <CardProgressBlock
            value={60}
            title={"Hypertensive Crisis"}
            subTitle={"Ongoing treatment"}
            date={"10 feb, 2020"}
            color={"red"}
        />
        <CardProgressBlock
            value={60}
            title={"Hypertensive Crisis"}
            subTitle={"Ongoing treatment"}
            date={"10 feb, 2020"}
        />
        <CardProgressBlock
            value={60}
            title={"Hypertensive Crisis"}
            subTitle={"Ongoing treatment"}
            date={"10 feb, 2020"}
            color={"orange"}
        />
    </Flex>
)
