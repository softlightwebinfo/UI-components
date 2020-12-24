import { IObjectString } from "../IObject";

export interface IGeneralContextState {
    translations?: ITranslation;
    currentLang?: string;

    getTranslation?(key: string): string;
}

export interface ITranslation {
    [p: string]: IObjectString;
}