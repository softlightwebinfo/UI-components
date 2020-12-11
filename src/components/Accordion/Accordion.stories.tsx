// Generated with util/create-component.js
import React from "react";
import Accordion from "./Accordion";
import { AccordionSection, Avatar, Card } from "../../index";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: "Accordion"
};
export const Default = () => (
    <Card>
        <Accordion id={"accordion-1"}>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faCog} className="h-color-brand"/>}
                label={"Rainbow Accordion"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
            </AccordionSection>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faCog} className="h-color-brand"/>}
                label={"Rainbow Accordion 2"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
                <Avatar name={"AvatarName"} src={"https://bit.ly/dan-abramov"}/>
            </AccordionSection>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faCog} className="h-color-brand"/>}
                label={"Rainbow Accordion 3"}
            >
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky. mn
                </p>
            </AccordionSection>
        </Accordion>
    </Card>
);

export const Disabled = () => (
    <Card>
        <Accordion id={"accordion-1"}>
            <AccordionSection
                icon={<FontAwesomeIcon icon={faCog} className="h-color-brand"/>}
                label={"Rainbow Accordion"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
            </AccordionSection>
            <AccordionSection
                disabled
                icon={<FontAwesomeIcon icon={faCog} className="h-color-brand"/>}
                label={"Rainbow Accordion 2"}>
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.
                </p>
                <Avatar name={"AvatarName"} src={"https://bit.ly/dan-abramov"}/>
            </AccordionSection>
            <AccordionSection
                disabled
                icon={<FontAwesomeIcon icon={faCog} className="h-color-brand"/>}
                label={"Rainbow Accordion 3"}
            >
                <p>
                    A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky.A rainbow is a meteorological phenomenon that is caused by reflection,
                    refraction and dispersion of light in water droplets resulting in a spectrum of
                    light appearing in the sky. mn
                </p>
            </AccordionSection>
        </Accordion>
    </Card>
);
