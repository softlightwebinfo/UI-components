import { IFormContextState } from "./context/IFormContextState";

export interface IFormFieldHooksProps {
    value?: string;
    id: string;

    onChange(evt: any): void;
}

export interface IFormFieldHooksPropsResponse {
    onChange(evt: any): void;

    setterStore(value?: string);

    value: string;
    use: IFormContextState;
}