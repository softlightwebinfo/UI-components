// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";

export interface FooterWidgetProps extends IProps {
    title: string;
    textRight: string;
    links: FooterWidgetPropsLink;
}

export interface FooterWidgetPropsLink {
    list: FooterWidgetPropsLinkList[];

    wrapper?(component: ReactElement, row: FooterWidgetPropsLinkList): ReactElement;
}

export interface FooterWidgetPropsLinkList {
    label: string;
    route: string;
}