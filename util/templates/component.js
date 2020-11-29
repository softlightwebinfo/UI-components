module.exports = (componentName) => ({
    content: `// Generated with util/create-component.js
import React from "react";
import {${componentName}Props} from "./${componentName}.types";
import "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = ({foo}) => (
    <div className="${componentName}" data-testid="${componentName}">{foo}</div>
);
export default ${componentName};
    `,
    extension: '.tsx'
});