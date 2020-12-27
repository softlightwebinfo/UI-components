// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FieldProps } from "../Field/Field.types";
import { ReactElement } from "react";

export interface PasswordInputFieldProps extends IProps, FieldProps {
    required?: boolean;
    value?: string;
    placeholder?: string;
    id?: string;
    hint?: ReactElement | string;
    inputHeight?: number;
    inputWidth?: number | string;
    validationMessage?: ReactElement | string;
    isValid?: boolean;

    onChange?(evt);
}