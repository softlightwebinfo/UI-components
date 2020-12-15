// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { IObject } from "../../interfaces/IObject";

export interface FormProps extends IProps {
    id: string;
    noValidate?: boolean;

    onSubmit(obj: IObject): void;

    onChange(id: string, value: any, obj: IObject): void;
}