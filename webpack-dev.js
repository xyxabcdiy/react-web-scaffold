/**
 * Copyright by XmT Ltd.
 * http://www.xiaomantou.net
 */
const path = require("path");

module.exports = {
    entry: "./src/app/main.tsx",
    output: {
        filename: "app.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "src"),
        historyApiFallback: true,
        host: "0.0.0.0",
        stats: {
            assets: true,
            errors: true,
            warnings: false,
            chunks: false,
            chunkModules: false
        },
        staticOptions: {
            extensions: ["html", "htm"]
        }
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"}
        ]
    },
    externals: {
        "jquery": "jQuery"
    }
};