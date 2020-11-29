module.exports = (componentName) => ({
    content: `// Generated with util/create-component.js
@import "../index.scss";
.${componentName} {
  @include font-defaults;
  color: $harvey-green;
}
`,
    extension: `.scss`
});