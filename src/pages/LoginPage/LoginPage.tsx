// Generated with util/create-component.js
import React from "react";
import { LoginPageProps } from "./LoginPage.types";
import "./LoginPage.scss";
import { BEM } from "../../libs/BEM";
import { FullPageTemplate } from "../../components";
import { LoginWidget } from "../../widgets";

const LoginPage: React.FC<LoginPageProps> = ({className, style, ...props}) => {
    const {
        backgroundImage,
        login,
        footer,
    } = props;

    const bem = new BEM("LoginPage", {});
    bem.Append(className);

    return (
        <FullPageTemplate
            footer={footer}
            backgroundImage={backgroundImage}
            style={style} className={bem.toString()}
        >
            <LoginWidget {...login}/>
        </FullPageTemplate>
    )
};
export default LoginPage;