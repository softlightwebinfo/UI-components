// Generated with util/create-component.js
import React from "react";
import { FooterWidgetProps } from "./FooterWidget.types";
import "./FooterWidget.scss";
import { BEM } from "../../libs/BEM";
import { Container, Footer, Typography } from "../../components";

const FooterWidget: React.FC<FooterWidgetProps> = ({className, style, children, ...props}) => {
    const {
        title,
        links,
        textRight,
    } = props;
    const bem = new BEM("FooterWidget", {});

    bem.Append(className);
    return (
        <Footer
            style={style}
            className={bem.toString()}
        >
            <Container className={bem.Children("container")}>
                <Typography className={bem.Children("left")}>
                    {title}
                </Typography>
                <nav className={bem.Children("list")}>
                    {links.list.map((value, index) => {
                        const component = <span>{value.label}</span>
                        return links.wrapper ? links.wrapper(component, value) : component
                    })}
                </nav>
                <Typography className={bem.Children("right")}>
                    {textRight}
                </Typography>
            </Container>
        </Footer>
    )
};
export default FooterWidget;