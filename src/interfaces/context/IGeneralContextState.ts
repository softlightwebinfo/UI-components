import { IObjectString } from "../IObject";
import { ToastProps } from "../../components/Toast/Toast.types";

export interface IGeneralContextState {
    translations: ITranslation;
    currentLang: string;
    notifications: ToastProps[];

    dismissNotification(index: number): void;

    sendNotification(prop: ToastProps): void;

    getTranslation(key: string): string;
}

export interface ITranslation {
    [p: string]: IObjectString;
}