// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface CardArticleFeaturedWidgetProps extends IProps {
    image: string;
    title: string;
    avatar: string;
    breadCrumb: CardArticleFeaturedWidgetPropsBreadCrumb[];
    isFeatured?: boolean;
    label?: string;
    description?: string;
}

export interface CardArticleFeaturedWidgetPropsBreadCrumb {
    label: string;

    onClick(e: any);
}