// Generated with util/create-component.js
import React from "react";
import MiniStatWid from "./MiniStatWid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../index";
export default {
    title: "MiniStatWid"
};
export const Default = () => (
    <Flex spacing>
        <MiniStatWid
            card={true}
            title={"Orders"}
            subTitle={"1,235"}
            icon={<FontAwesomeIcon icon={faTag} />}
        />
        <MiniStatWid
            card={true}
            title={"Orders"}
            subTitle={"1,235"}
            icon={<FontAwesomeIcon icon={faTag} />}
        />
        <MiniStatWid
            card={true}
            title={"Orders"}
            subTitle={"1,235"}
            icon={<FontAwesomeIcon icon={faTag} />}
        />
        <MiniStatWid
            card={true}
            title={"Orders"}
            subTitle={"1,235"}
            icon={<FontAwesomeIcon icon={faTag} />}
        />
    </Flex>
);
