export interface IFormContextState {
    onChange(id: string, value: any);

    has(id: string): boolean;

    data?: {
        [p: string]: any;
    }
}