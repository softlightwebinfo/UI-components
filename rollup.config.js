import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

const packageJson = require("./package.json");

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({useTsconfigDeclarationDir: true}),
        postcss({
            // extract: true,
        }),
        copy({
            targets: [
                {
                    src: "src/scss/variables.scss",
                    dest: "build",
                    rename: "variables.scss"
                },
                {
                    src: "src/scss/typography.scss",
                    dest: "build",
                    rename: "typography.scss"
                },
                {
                    src: "src/scss/_functions.scss",
                    dest: "build",
                    rename: "_functions.scss"
                },
                {
                    src: "src/scss/_helpers.scss",
                    dest: "build",
                    rename: "_helpers.scss"
                },
                {
                    src: "src/scss/actions.scss",
                    dest: "build",
                    rename: "actions.scss"
                }
            ]
        })
    ]
};
