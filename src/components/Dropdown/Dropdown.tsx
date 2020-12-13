// Generated with util/create-component.js
import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.types";
import "./Dropdown.scss";
import { BEM } from "../../libs/BEM";
import { Card, Popover, Typography } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Dropdown: React.FC<DropdownProps> = (
    {
        className,
        style,
        data = [],
        select,
        placeholder = "Select option",
        onClick
    }) => {
    const [open, setOpen] = useState(false);
    const bem = new BEM("Dropdown", {});
    data = [
        {value: "", label: placeholder},
        ...data,
    ];
    bem.Append(className);
    const selectedPlaceholder = select && !!data.length ? data.find(i => i.value == select).label : placeholder;
    return (
        <Popover
            open={open}
            onOpen={isOpen => setOpen(open && isOpen ? false : isOpen)}
            style={style}
            className={bem.toString()}
            trigger={(
                <div className={bem.Children("trigger")}>
                    <span>{selectedPlaceholder}</span>
                    <FontAwesomeIcon icon={open ? faChevronDown : faChevronLeft}/>
                </div>
            )}
        >
            <Card className={bem.Children("menu")}>
                <section>
                    {data.length ? (
                        data.map((value, index) => (
                            <Typography
                                onClick={() => onClick(value.value, value, index)}
                                key={index}
                                className={bem.Modifier("option", "active", select == value.value)}
                            >
                                {value.label}
                            </Typography>
                        ))
                    ) : (
                        <Typography className={bem.Children("no-results")}>No results</Typography>
                    )}
                </section>
            </Card>
        </Popover>
    )
};
export default Dropdown;