// Generated with util/create-component.js
import React from "react";
import { LoginWidgetProps } from "./LoginWidget.types";
import "./LoginWidget.scss";
import { BEM } from "../../libs/BEM";
import { Button, Card, Flex, Form, Image, PasswordInputField, TextInputField } from "../../components";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useGeneralContext } from "../../context/generalContext";

const LoginWidget: React.FC<LoginWidgetProps> = ({className, style, ...props}) => {
    const {
        onChange,
        onSubmit,
        initEmail,
        initPassword,
        logoTitle,
        logoSrc,
        linkCreateAccountWrapper,
        linkNeedHelpWrapper,
    } = props;
    const bem = new BEM("LoginWidget", {});
    bem.Append(className);
    const use = useGeneralContext();

    const componentCreateAccount = <span>{use.getTranslation("btnCreateAccount")}</span>;
    const componentNeedHelp = <span>{use.getTranslation("needHelp")}?</span>
    return (
        <Card
            transparent
            style={style}
            className={bem.toString()}
        >
            <Image title={logoTitle} src={logoSrc} className={bem.Children("logo")}/>
            <Form
                custom
                onChange={onChange}
                onSubmit={onSubmit}
                id={"form-login"}
            >
                <TextInputField custom rounded icon={faUser} value={initEmail}/>
                <PasswordInputField custom rounded icon={faLock} value={initPassword}/>
                <Button custom>{use.getTranslation("btnLogin")}</Button>
                <Flex className={bem.Children("footer")}>
                    {linkCreateAccountWrapper ? linkCreateAccountWrapper(componentCreateAccount) : componentCreateAccount}
                    {linkNeedHelpWrapper ? linkNeedHelpWrapper(componentNeedHelp) : componentNeedHelp}
                </Flex>
            </Form>
        </Card>
    )
};
export default LoginWidget;