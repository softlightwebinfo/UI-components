// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IObject } from "../../interfaces/IObject";

export interface FormProps extends IProps {
    id: string;
    noValidate?: boolean;
    custom?: boolean;
    onSubmit: FormPropsOnSubmit;
    onChange: FormPropsOnChange;
}

export type FormPropsOnChange = (id: string, value: any, obj: IObject) => void;
export type FormPropsOnSubmit = (evt: any, obj: IObject) => void;