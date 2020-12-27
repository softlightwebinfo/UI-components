// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";
import { FooterWidgetProps } from "../../widgets/FooterWidget/FooterWidget.types";

export interface FullPageTemplateProps extends IProps {
    children: ReactElement | ReactElement[];
    backgroundImage: string;
    footer: FooterWidgetProps;
}