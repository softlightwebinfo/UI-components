// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { ITranslation } from "../../interfaces/context/IGeneralContextState";

export interface ContextProviderProps extends IProps {
    translations: ITranslation;
    lang: string;
}