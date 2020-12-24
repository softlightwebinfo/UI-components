// Generated with util/create-component.js
import { IProps } from "../../interfaces/IProps";
import { FormPropsOnChange, FormPropsOnSubmit } from "../../components/Form/Form.types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ContactPageProps extends IProps {
    image: string;
    title: string;
    description: string;
    address: string;
    onChange: FormPropsOnChange;
    onSubmit: FormPropsOnSubmit;
    information: ContactPagePropsInformation[];
}

export interface ContactPagePropsInformation {
    icon: IconProp;
    title: string;
    description: string[];
}