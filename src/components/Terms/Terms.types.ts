// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";

export interface TermsProps extends IProps {
    rows: TermsPropsRow[];

    onYes();
    onNo();
}

export interface TermsPropsRow {
    title: string;
    description: string;
}