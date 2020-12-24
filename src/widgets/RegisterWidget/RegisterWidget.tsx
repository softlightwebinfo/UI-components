// Generated with util/create-component.js
import React from "react";
import { RegisterWidgetProps } from "./RegisterWidget.types";
import "./RegisterWidget.scss";
import { BEM } from "../../libs/BEM";
import { useGeneralContext } from "../../context/generalContext";
import { Button, Card, Flex, Form, Image, PasswordInputField, TextInputField } from "../../components";
import { faEnvelope, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const RegisterWidget: React.FC<RegisterWidgetProps> = ({className, style, ...props}) => {
    const {
        onChange,
        onSubmit,
        initEmail,
        initPassword,
        initName,
        initPhone,
        logoTitle,
        logoSrc,
        linkLoginWrapper,
        linkNeedHelpWrapper,
    } = props;
    const bem = new BEM("RegisterWidget", {});
    bem.Append(className);
    const use = useGeneralContext();

    const componentCreateAccount = <span>{use.getTranslation("youHaveAccount")}</span>;
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
                id={"form-register"}
            >
                <TextInputField
                    placeholder={use.getTranslation("name")}
                    custom
                    rounded
                    icon={faUser}
                    value={initName}
                />
                <TextInputField
                    placeholder={use.getTranslation("phone")}
                    custom
                    rounded
                    icon={faPhone}
                    value={initPhone}
                />
                <TextInputField
                    placeholder={use.getTranslation("email")}
                    custom
                    rounded
                    icon={faEnvelope}
                    value={initEmail}
                />
                <PasswordInputField
                    placeholder={use.getTranslation("password")}
                    custom
                    rounded
                    icon={faLock}
                    value={initPassword}
                />
                <Button custom>{use.getTranslation("btnLogin")}</Button>
                <Flex className={bem.Children("footer")}>
                    {linkLoginWrapper ? linkLoginWrapper(componentCreateAccount) : componentCreateAccount}
                    {linkNeedHelpWrapper ? linkNeedHelpWrapper(componentNeedHelp) : componentNeedHelp}
                </Flex>
            </Form>
        </Card>
    );
};
export default RegisterWidget;