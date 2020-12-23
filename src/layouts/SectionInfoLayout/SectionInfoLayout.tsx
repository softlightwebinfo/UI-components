// Generated with util/create-component.js
import React from "react";
import { SectionInfoLayoutProps } from "./SectionInfoLayout.types";
import "./SectionInfoLayout.scss";
import { BEM } from "../../libs/BEM";
import { CardImage, Col, Info, Row, Section } from "../../components";

const SectionInfoLayout: React.FC<SectionInfoLayoutProps> = ({className, style, ...props}) => {
    const {
        image,
        imageTitle,
        list,
        backgroundImage,
        spaceTop,
    } = props;
    const bem = new BEM("SectionInfoLayout", {
        spaceTop
    });
    bem.Append(className);
    return (
        <Section
            style={{
                ...style,
                backgroundImage: `url(${backgroundImage})`,
            }}
            className={bem.toString()}
        >
            <Row>
                <Col md={6}>
                    {list.map((info, indexInfo) => (
                        <Info {...info} horizontal key={indexInfo}/>
                    ))}
                </Col>
                <Col md={6}>
                    <CardImage image={image} title={imageTitle}/>
                </Col>
            </Row>
        </Section>
    )
};
export default SectionInfoLayout;