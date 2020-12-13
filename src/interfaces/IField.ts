export interface IField {
    placeholder?: string;
    value?: string;
    required?: boolean;
    dark?: boolean;

    onChange?(e: any);

    onKeyPress?(e: any);

    onKeyDown?(e: any);

    onKeyUp?(e: any);
}