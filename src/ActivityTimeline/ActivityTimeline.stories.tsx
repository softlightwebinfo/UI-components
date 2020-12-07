// Generated with util/create-component.js
import React from "react";
import ActivityTimeline from "./ActivityTimeline";
import { Avatar, Card, TimelineMarker } from "../index";

export default {
    title: "ActivityTimeline"
};
export const Default = () => (
    <div style={{
        width: 500,
        margin: "36px auto auto"
    }}>
        <ActivityTimeline>
            <TimelineMarker
                icon={<Avatar name={"Avatar"} src={"https://bit.ly/dan-abramov"}/>}
                label={"User sign Up."}
                datetime={"Yesterday"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
            />
            <TimelineMarker
                icon={<Avatar name={"Avatar"} src={"https://bit.ly/kent-c-dodds"}/>}
                label={"User phone verified."}
                datetime={"Yesterday"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            />
            <TimelineMarker
                icon={<Avatar name={"Avatar"} src={"https://bit.ly/kent-c-dodds"}/>}
                label={"User phone verified."}
                datetime={"Yesterday"}
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            >
                <Card title="Landscape">
                    <img
                        src="https://img.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg?size=626&ext=jpg"
                        alt="landscape with mountain"
                    />
                </Card>
            </TimelineMarker>
        </ActivityTimeline>
    </div>
);