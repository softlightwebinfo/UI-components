export interface IField {
    placeholder?: string;
    value?: string;

    onChange?(e: any);

    onKeyPress?(e: any);

    onKeyDown?(e: any);

    onKeyUp?(e: any);
}