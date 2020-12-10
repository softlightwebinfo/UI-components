// Generated with util/create-component.js
import React from "react";
import AvatarGroup from "./AvatarGroup";

export default {
    title: "AvatarGroup"
};
export const Default = () => (
    <AvatarGroup
        avatars={[
            {
                src: "https://bit.ly/dan-abramov",
                assistiveText: "Jose Leandro",
                title: "Jose Leandro",
            },
            {
                src: "https://bit.ly/dan-abramov",
                assistiveText: "Tahimi Leon",
                title: "Tahimi Leon",
            },
            {
                src: "https://bit.ly/dan-abramov",
                assistiveText: "Carlos Miguel",
                title: "Carlos Miguel",
            },
            {
                src: "https://bit.ly/dan-abramov",
                assistiveText: "Jane Doe",
                title: "Jane Doe",
            },
        ]}
        maxAvatars={3}
        showCounter
    />
);
