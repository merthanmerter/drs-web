const path = require("path");

const production = process.env.NODE_ENV === "production";
const mode = production ? "production" : "development";
const sourcemap = production ? false : "source-map";
const envdir = production ? "dist/assets/js" : "debug/js";
const filename = production ? "bundle.min.js" : "bundle.debug.js";

module.exports = {
    mode: mode, // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: {
        app: "./src/js/app.js",
    },
    output: {
        filename: filename,
        path: path.resolve(__dirname, envdir),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        }, ],
    },
    resolve: {
        extensions: ["*", ".js"],
    },
    devtool: sourcemap,
};