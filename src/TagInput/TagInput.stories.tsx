// Generated with util/create-component.js
import React, { useState } from "react";
import TagInput from "./TagInput";

export default {
    title: "TagInput"
};
export const Default = () => {
    const [state, setState] = useState({values: ['Kauri', 'Willow']});
    return (
        <TagInput
            inputProps={{placeholder: 'Add trees...'}}
            values={state.values}
            onChange={(values) => setState({values})}
        />
    );
}
