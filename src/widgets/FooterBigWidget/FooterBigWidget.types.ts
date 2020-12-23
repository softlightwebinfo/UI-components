// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FooterWidgetProps } from "../FooterWidget/FooterWidget.types";
import { FooterListWidgetProps } from "../FooterListWidget/FooterListWidget.types";

export interface FooterBigWidgetProps extends IProps {
    top: FooterListWidgetProps;
    bottom: FooterWidgetProps;
    spaceTop?: boolean;
}