// Generated with util/create-component.js
import React from "react";
import Autocomplete from "./Autocomplete";
import { TextInput } from "../index";

export default {
    title: "Autocomplete"
};
export const Default = () => {
    return (
        <Autocomplete
            title={"Fruits"}
            onChange={console.log}
            items={["Apple", "Apricot", "Banana", "Cherry", "Cucumber"]}
        >
            {({inputValue, inputProps}) => (
                <TextInput
                    {...inputProps}
                    value={inputValue}
                    placeholder={"Search fruits..."}
                />
            )}
        </Autocomplete>
    );
}
