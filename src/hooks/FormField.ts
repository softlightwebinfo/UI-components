import { useFormContext } from "../context";
import { useEffect } from "react";
import { IFormFieldHooksProps, IFormFieldHooksPropsResponse } from "../interfaces/IFormFieldHooksProps";

export const formFieldHooks = (props: IFormFieldHooksProps): IFormFieldHooksPropsResponse => {
    const use = useFormContext();

    const setterStore = (value?: string) => {
        if (use != undefined && props.id) {
            use.onChange(props.id, value || props.value || "");
        }
    }

    const onChange = (evt) => {
        props.onChange && props.onChange(evt);
        setterStore(evt.target.value);
    };

    const value = props.id in use.data ? use.data[props.id] : props.value;

    useEffect(() => {
        setterStore();
    }, [])

    return {
        onChange,
        use,
        value,
        setterStore,
    }
}