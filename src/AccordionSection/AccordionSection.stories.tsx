// Generated with util/create-component.js
import React from "react";
import AccordionSection from "./AccordionSection";
import { Card } from "../index";

export default {
    title: "AccordionSection"
};
export const Default = () => (
    <AccordionSection label={"Test de example"}>
        <p>
            A rainbow is a meteorological phenomenon that is caused by reflection,
            refraction and dispersion of light in water droplets resulting in a spectrum of
            light appearing in the sky.
        </p>
    </AccordionSection>
);
export const CardDefault = () => (
    <Card>
        <AccordionSection label={"Test de example"}>
            <p>
                A rainbow is a meteorological phenomenon that is caused by reflection,
                refraction and dispersion of light in water droplets resulting in a spectrum of
                light appearing in the sky.
            </p>
        </AccordionSection>
    </Card>
);
