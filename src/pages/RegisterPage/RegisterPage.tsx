// Generated with util/create-component.js
import React from "react";
import { RegisterPageProps } from "./RegisterPage.types";
import "./RegisterPage.scss";
import { BEM } from "../../libs/BEM";
import { FullPageTemplate } from "../../components";
import {  RegisterWidget } from "../../widgets";

const RegisterPage: React.FC<RegisterPageProps> = ({className, style, ...props}) => {
    const {
        backgroundImage,
        register,
        footer,
    } = props;

    const bem = new BEM("RegisterPage", {});
    bem.Append(className);

    return (
        <FullPageTemplate
            footer={footer}
            backgroundImage={backgroundImage}
            style={style} className={bem.toString()}
        >
            <RegisterWidget {...register}/>
        </FullPageTemplate>
    )
};
export default RegisterPage;