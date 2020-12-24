import React from "react";
import { IGeneralContextState } from "../interfaces/context/IGeneralContextState";

const GeneralContext = React.createContext<IGeneralContextState>({});
GeneralContext.displayName = 'GeneralContext';
export { GeneralContext };

export function useGeneralContext() {
    return React.useContext(GeneralContext);
}