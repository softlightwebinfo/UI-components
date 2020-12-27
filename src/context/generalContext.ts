import React from "react";
import { IGeneralContextState } from "../interfaces/context/IGeneralContextState";
import { ToastProps } from "../components/Toast/Toast.types";

const GeneralContext = React.createContext<IGeneralContextState>({
    currentLang: "en",
    translations: {},
    notifications: [],
    sendNotification(prop: ToastProps) {
    },
    dismissNotification(index: number): void {

    },
    getTranslation(key: string): string {
        return key;
    }
});
GeneralContext.displayName = 'GeneralContext';
export { GeneralContext };

export function useGeneralContext() {
    return React.useContext(GeneralContext);
}