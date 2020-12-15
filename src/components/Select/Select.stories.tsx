// Generated with util/create-component.js
import React, { useState } from "react";
import Select from "./Select";

export default {
    title: "Select"
};
export const Default = () => {
    const [selected, setSelect] = useState("-1");
    return (
        <Select onChange={setSelect} value={selected}>
            <option value="-1">Select option</option>
            <option value="1">Foo</option>
            <option value="2">Bar</option>
        </Select>
    );
}