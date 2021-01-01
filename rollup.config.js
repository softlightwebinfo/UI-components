import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import scss from 'rollup-plugin-scss'

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
        json(),
        postcss({
            extract: true,
        }),
        scss({
            prefix: `@import "../../index.scss";`,
        }),
        copy({
            targets: [
                // {
                //     src: "src/assets/scss/variables.scss",
                //     dest: "build",
                //     rename: "variables.scss"
                // },
                // {
                //     src: "src/assets/scss/typography.scss",
                //     dest: "build",
                //     rename: "typography.scss"
                // },
                // {
                //     src: "src/assets/scss/_functions.scss",
                //     dest: "build",
                //     rename: "_functions.scss"
                // },
                // {
                //     src: "src/assets/scss/_mixins.scss",
                //     dest: "build",
                //     rename: "_mixins.scss"
                // },
                // {
                //     src: "src/assets/scss/_helpers.scss",
                //     dest: "build",
                //     rename: "_helpers.scss"
                // },
                // {
                //     src: "src/assets/scss/actions.scss",
                //     dest: "build",
                //     rename: "actions.scss"
                // }
            ]
        })
    ]
};
