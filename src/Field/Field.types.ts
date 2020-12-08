// Generated with util/create-component.js
import { IProps } from "../assets/interfaces/IProps";
import { ReactElement } from "react";

export interface FieldProps extends IProps {
    label?: string;
    required?: boolean;
    description?: string;
    hint?: ReactElement | string;
    validationMessage?: ReactElement | string;
    isValid?: boolean;
    rounded?: boolean;
    formGroup?: boolean;

    onChange?(evt);
}