// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface CardGoodJobWidgetProps extends IProps {
    title: string;
    description: string;
    rows: CardGoodJobWidgetPropsRow[];
}

export interface CardGoodJobWidgetPropsRow {
    label: string;
    active: boolean;
}