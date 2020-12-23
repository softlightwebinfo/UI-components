// Generated with util/create-component.js
import React from "react";
import { SectionProps } from "./Section.types";
import "./Section.scss";
import { BEM } from "../../libs/BEM";
import { Container } from "../index";

const Section: React.FC<SectionProps> = ({className, style, children}) => {
    const bem = new BEM("Section", {});
    bem.Append(className);
    return (
        <section
            style={style}
            className={bem.toString()}
        >
            <Container>
                {children}
            </Container>
        </section>
    )
};
export default Section;