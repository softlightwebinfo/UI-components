// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ITranslation } from "../../interfaces/context/IGeneralContextState";
import { NotificationProps } from "../Notification/Notification.types";

export interface ContextProviderProps extends IProps {
    translations: ITranslation;
    lang: string;
    notifications?: NotificationProps[];
}