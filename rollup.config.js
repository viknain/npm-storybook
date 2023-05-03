// import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";
// import postcss from "rollup-plugin-postcss";
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("rollup-plugin-typescript2");
const typescript = require("rollup-plugin-typescript2");
const postcss = require("rollup-plugin-postcss");
const packageJson = require("./package.json");
module.exports = {
  input: ".storybook/main.js",
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
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css']
    })
  ]
};