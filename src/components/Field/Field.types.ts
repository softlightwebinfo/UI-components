// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ReactElement } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface FieldProps extends IProps {
    label?: string;
    required?: boolean;
    description?: string;
    hint?: ReactElement | string;
    validationMessage?: ReactElement | string;
    isValid?: boolean;
    rounded?: boolean;
    formGroup?: boolean;
    custom?: boolean;
    icon?: IconProp;

    onChange?(evt);
}