// Generated with util/create-component.js
import React from "react";
import { FooterListWidgetProps } from "./FooterListWidget.types";
import "./FooterListWidget.scss";
import { BEM } from "../../libs/BEM";
import { Col, Container, Row, Typography } from "../..";

const FooterListTitle = (props) => (
    <Typography
        className={props.bem.Children("title")}
        component={"h5"}
        color={"orange"}
        variant={"body1"}
    >
        {props.title}
    </Typography>
);

const FooterListWidget: React.FC<FooterListWidgetProps> = ({className, style, ...props}) => {
    const {
        titleLeft,
        descriptionLeft,
        titleRight,
        descriptionRight,
        links = [],
        linkWrapper,
    } = props;
    const bem = new BEM("FooterListWidget", {});
    bem.Append(className);
    return (
        <section
            style={style}
            className={bem.toString()}
        >
            <Container>
                <Row>
                    <Col md={3}>
                        <FooterListTitle title={titleLeft} bem={bem}/>
                        <Typography variant={"caption"}>{descriptionLeft}</Typography>
                    </Col>
                    {links.map((value, index) => {
                        return (
                            <Col md={2} key={index}>
                                <FooterListTitle title={value.title} bem={bem}/>
                                <>
                                    {value.links.map((link, index) => {
                                        const component = <div>{link}</div>
                                        return (
                                            <Typography key={index} variant={"caption"}>
                                                {linkWrapper ? linkWrapper(component, link) : component}
                                            </Typography>
                                        )
                                    })}
                                </>
                            </Col>
                        )
                    })}
                    <Col md={3}>
                        <FooterListTitle title={titleRight} bem={bem}/>
                        <Typography variant={"caption"}>{descriptionRight}</Typography>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
export default FooterListWidget;