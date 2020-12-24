// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FormPropsOnChange, FormPropsOnSubmit } from "../../components/Form/Form.types";
import { ReactElement } from "react";

export interface RegisterWidgetProps extends IProps {
    onChange: FormPropsOnChange;
    onSubmit: FormPropsOnSubmit;
    initEmail?: string;
    initPassword?: string;
    initName?: string;
    initPhone?: string;
    logoSrc: string;
    logoTitle: string;
    linkLoginWrapper?: RegisterWidgetTypesWrapper;
    linkNeedHelpWrapper?: RegisterWidgetTypesWrapper;
}

export type RegisterWidgetTypesWrapper = (component: ReactElement) => ReactElement;