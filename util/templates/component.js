module.exports = (componentName) => ({
    content: `// Generated with util/create-component.js
import React from "react";
import {${componentName}Props} from "./${componentName}.types";
import "./${componentName}.scss";
import { BEM } from "../assets/libs/BEM";

const ${componentName}: React.FC<${componentName}Props> = ({className, style, children}) => {
    const bem = new BEM("${componentName}", {});
    bem.Append(className);
    return(
        <div style={style} className={bem.toString()} data-testid="${componentName}">{children}</div>
    )
};
export default ${componentName};`,
    extension: '.tsx'
});