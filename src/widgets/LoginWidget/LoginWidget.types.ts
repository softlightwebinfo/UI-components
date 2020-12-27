// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FormPropsOnChange, FormPropsOnSubmit } from "../../components/Form/Form.types";
import { ReactElement } from "react";

export interface LoginWidgetProps extends IProps {
    onChange: FormPropsOnChange;
    onSubmit: FormPropsOnSubmit;
    initEmail?: string;
    initPassword?: string;
    logoSrc: string;
    logoTitle: string;
    linkCreateAccountWrapper?: LoginWidgetTypesWrapper;
    linkNeedHelpWrapper?: LoginWidgetTypesWrapper;
}

export type LoginWidgetTypesWrapper = (component: ReactElement) => ReactElement;