// Generated with util/create-component.js
import React, { useState } from "react";
import { AutocompleteProps } from "./Autocomplete.types";
import "./Autocomplete.scss";
import { BEM } from "../assets/libs/BEM";
import { Card, Popover, Typography } from "../index";
import { KeyCode } from "../assets/mappings/constants";
import { elementBlur } from "../assets/functions/dom";

const Autocomplete: React.FC<AutocompleteProps> = (
    {
        className,
        style,
        children,
        ...props
    }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [selected, setSelected] = useState(0);

    const bem = new BEM("Autocomplete", {
        open: open,
    });
    bem.Append(className);

    const onClear = () => {
        setValue("");
        elementBlur();
        setOpen(false);
        props.onChange && props.onChange(null, null);
    }

    const onClickSelect = (item, index) => {
        return () => {
            setValue(item);
            props.onChange && props.onChange(item, index);
            elementBlur();
            setOpen(false);
        }
    }

    const filter = props.items.filter(item => item.toLowerCase().indexOf(value.toLowerCase()) != -1)
    const result = filter.map((item, index) => {
        return (
            <div onClick={onClickSelect(item, index)} className={bem.Children("item")} key={item}>
                {item}
            </div>
        )
    }).filter(e => e != null);
    const trigger = children({
        inputValue: value,
        inputProps: {
            onChange: e => setValue(e.target.value),
            onKeyDown: (evt: any) => {
                evt = evt || window.event;
                if (evt.keyCode == KeyCode.ENTER) {
                    if (filter.length == 1) {
                        setValue(filter[0]);
                        props.onChange && props.onChange(filter[0], 0);
                        elementBlur();
                        setOpen(false);
                    }
                }
            }
        },
    });

    return (
        <Popover
            open={open}
            style={style}
            className={bem.toString()}
            trigger={trigger}
            onOpen={setOpen}
            showClose={!!value}
            onClear={onClear}
        >
            <Card className={bem.Children("menu")}>
                <header>
                    {props.title}
                </header>
                <section>
                    {result.length ? result : (
                        <Typography className={bem.Children("no-results")}>No results</Typography>
                    )}
                </section>
            </Card>
        </Popover>
    )
};
export default Autocomplete;