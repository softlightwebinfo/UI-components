import React from "react";
import { IFormContextState } from "../interfaces/context/IFormContextState";

const FormContext = React.createContext<IFormContextState>({
    onChange(id: string, value: any) {
    },
    has(id: string): boolean {
        return false;
    },
    data: {}
});
FormContext.displayName = 'FormContext';
export { FormContext };

export function useFormContext() {
    return React.useContext(FormContext);
}