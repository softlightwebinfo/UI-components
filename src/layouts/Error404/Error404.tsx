// Generated with util/create-component.js
import React from "react";
import { Error404Props } from "./Error404.types";
import "./Error404.scss";
import { BEM } from "../../libs/BEM";
import { IconSvg, Section, Typography } from "../../components";
import { useGeneralContext } from "../../context";

const Error404: React.FC<Error404Props> = ({className, style, ...props}) => {
    const {
        wrapperBack
    } = props;
    const bem = new BEM("Error404", {});
    bem.Append(className);
    const use = useGeneralContext();
    return (
        <Section
            style={style}
            className={bem.toString()}
        >
            <IconSvg icon={"404"}/>
            <Typography className={bem.Children("title")} component={"h1"}>{use.getTranslation("oops")}</Typography>
            <Typography component={"h6"} variant={"body1"}
                        className={bem.Children("subTitle")}>{use.getTranslation("notFound")}</Typography>
            {wrapperBack?.(use.getTranslation("goToHome")) ?? (
                <a href="/">
                    {use.getTranslation("goToHome")}
                </a>
            )}
        </Section>
    )
};
export default Error404;