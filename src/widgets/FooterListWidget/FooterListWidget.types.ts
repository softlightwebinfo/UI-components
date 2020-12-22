// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";

export interface FooterListWidgetProps extends IProps {
    titleLeft: string;
    descriptionLeft: string;
    titleRight: string;
    descriptionRight: string;
    links: FooterListWidgetPropsLink[];

    linkWrapper?(component: ReactElement, row: FooterListWidgetPropsLink);
}

export interface FooterListWidgetPropsLink {
    title: string;
    links: string[];
}