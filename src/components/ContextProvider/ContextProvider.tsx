// Generated with util/create-component.js
import React from "react";
import { ContextProviderProps } from "./ContextProvider.types";
import "./ContextProvider.scss";
import { BEM } from "../../libs/BEM";
import { GeneralContext } from "../../context/generalContext";
import { getTranslations } from "../../functions/getTranslations";
import { deepmerge } from "../../functions/merge";

const ContextProvider: React.FC<ContextProviderProps> = ({className, children, ...props}) => {
    const {
        translations,
        lang = "en",
    } = props;
    const bem = new BEM("ContextProvider", {});
    bem.Append(className);
    const store = {
        currentLang: lang,
        getTranslation(key: string) {
            if (this.currentLang in this.translations && key in this.translations[this.currentLang]) {
                return this.translations[this.currentLang][key];
            }
            return key;
        },
        translations: deepmerge(getTranslations(), translations),
    };

    return (
        <GeneralContext.Provider value={store}>
            {children}
        </GeneralContext.Provider>
    )
};
export default ContextProvider;