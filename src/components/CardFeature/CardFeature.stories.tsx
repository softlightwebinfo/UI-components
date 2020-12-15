// Generated with util/create-component.js
import React from "react";
import CardFeature from "./CardFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../index";

export default {
    title: "CardFeature"
};
export const Default = () => (
    <Flex>
        <CardFeature
            title={"Web design"}
            icon={<FontAwesomeIcon icon={faTimes}/>}
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
        />
        <CardFeature
            title={"Web design"}
            icon={<FontAwesomeIcon icon={faTimes}/>}
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
        />
        <CardFeature
            title={"Web design"}
            icon={<FontAwesomeIcon icon={faTimes}/>}
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
        />
    </Flex>
);

export const Left = () => (
    <Flex>
        <CardFeature
            row
            title={"Web design"}
            icon={<FontAwesomeIcon icon={faTimes}/>}
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
        />
        <CardFeature
            row
            title={"Web design"}
            icon={<FontAwesomeIcon icon={faTimes}/>}
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
        />
        <CardFeature
            row
            title={"Web design"}
            icon={<FontAwesomeIcon icon={faTimes}/>}
            description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
        />
    </Flex>
);
