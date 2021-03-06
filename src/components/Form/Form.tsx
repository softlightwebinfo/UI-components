// Generated with util/create-component.js
import React from "react";
import { FormProps } from "./Form.types";
import "./Form.scss";
import { BEM } from "../../libs/BEM";
import { FormContext } from "../../context/formContext";
import { IObject } from "../../interfaces/IObject";

class Form extends React.Component<FormProps, { data: IObject }> {
    static defaultProps = {noValidate: false}
    public state = {
        data: {},
    };

    constructor(props) {
        super(props);
    }

    has = (id: string): boolean => {
        return id in this.state.data;
    }

    onChange = (id: string, value: any) => {
        this.setState(e => ({
            ...e,
            data: {
                ...e.data,
                [id]: value,
            }
        }), () => this.onChangeProps(id, value));
    }

    onChangeProps = (id, value) => {
        this.props.onChange(id, value, this.state.data);
    }

    render() {
        let {
            className,
            noValidate,
            style,
            onSubmit,
            id,
            children,
            custom,
        } = this.props;
        const bem = new BEM("Form", {
            custom: custom,
        });
        bem.Append(className);
        const onSubmitForm = (evt) => {
            onSubmit(evt, this.state.data);
        };
        return (
            <FormContext.Provider value={{
                data: this.state.data,
                has: this.has,
                onChange: this.onChange,
            }}>
                <form
                    id={id}
                    onSubmit={onSubmitForm}
                    style={style}
                    className={bem.toString()}
                >
                    {children}
                </form>
            </FormContext.Provider>
        )
    }
}

export default Form;