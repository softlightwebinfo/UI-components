// Generated with util/create-component.js
import React from "react";
import { ContextProviderProps } from "./ContextProvider.types";
import "./ContextProvider.scss";
import { GeneralContext } from "../../context";
import { getTranslations } from "../../functions/getTranslations";
import { deepmerge } from "../../functions/merge";
import { ToastContainer } from "../index";
import { IGeneralContextState } from "../../interfaces/context/IGeneralContextState";
import { ToastProps } from "../Toast/Toast.types";

class ContextProvider extends React.Component<ContextProviderProps, IGeneralContextState> {
    public state = {
        currentLang: this.props.lang || "es",
        notifications: this.props.notifications || [],
        dismissNotification: (index: number) => {
            this.setState(e => ({
                notifications: e.notifications.filter((_, indexR) => indexR != index),
            }))
        },
        sendNotification: (prop: ToastProps) => {
            this.setState(e => ({
                notifications: [prop, ...e.notifications],
            }));
        },
        getTranslation(key: string) {
            if (this.currentLang in this.translations && key in this.translations[this.currentLang]) {
                return this.translations[this.currentLang][key];
            }
            return key;
        },
        translations: deepmerge(getTranslations(), this.props.translations),
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {children} = this.props;
        return (
            <GeneralContext.Provider value={this.state}>
                {children}
                <ToastContainer/>
            </GeneralContext.Provider>
        )
    }
}

export default ContextProvider;