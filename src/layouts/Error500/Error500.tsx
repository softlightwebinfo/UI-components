// Generated with util/create-component.js
import React from "react";
import { Error500Props } from "./Error500.types";
import "./Error500.scss";
import { BEM } from "../../libs/BEM";
import { useGeneralContext } from "../../context";
import { IconSvg, Section, Typography } from "../../components";

const Error500: React.FC<Error500Props> = ({className, style, ...props}) => {
    const {
        wrapperBack
    } = props;
    const bem = new BEM("Error500", {});
    bem.Append(className);
    const use = useGeneralContext();

    return (
        <Section
            style={style}
            className={bem.toString()}
        >
            <IconSvg icon={"500"}/>
            <Typography
                className={bem.Children("title")}
                component={"h1"}
            >
                {use.getTranslation("somethingWentWrong")}
            </Typography>
            <Typography
                component={"h6"} variant={"body1"}
                className={bem.Children("subTitle")}
            >
                {use.getTranslation("serverError")}
            </Typography>
            {wrapperBack?.(use.getTranslation("goToHome")) ?? (
                <a href="/">
                    {use.getTranslation("goToHome")}
                </a>
            )}
        </Section>
    )
};
export default Error500;