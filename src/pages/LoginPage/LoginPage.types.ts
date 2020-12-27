// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { LoginWidgetProps } from "../../widgets/LoginWidget/LoginWidget.types";
import { FooterWidgetProps } from "../../widgets/FooterWidget/FooterWidget.types";

export interface LoginPageProps extends IProps {
    backgroundImage: string;
    login: LoginWidgetProps;
    footer: FooterWidgetProps;
}