// Generated with util/create-component.js
import React from "react";
import Accordion from "./Accordion";
import { AccordionSection, Avatar, Card } from "../index";

export default {
    title: "Accordion"
};
export const Default = () => (
    <Card>
        <Accordion id={"accordion-1"}>
            <AccordionSection label={"Rainbow Accordion"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
            </AccordionSection>
            <AccordionSection label={"Rainbow Accordion 2"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
                <Avatar name={"AvatarName"} src={"https://bit.ly/dan-abramov"}/>
            </AccordionSection>
            <AccordionSection label={"Rainbow Accordion 3"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
            </AccordionSection>
        </Accordion>
    </Card>
);
