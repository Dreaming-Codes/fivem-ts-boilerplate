const path = require("path");

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'dist');

const server = {
    entry: path.resolve(srcPath, "server") + "/server.ts",
    target: "node",
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"

            }
        ]
    },
    output: {
        filename: 'server.js',
        path: buildPath
    }
};

const client = {
    entry: path.resolve(srcPath, "client") + "/client.ts",
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"

            }
        ]
    },
    output: {
        filename: 'client.js',
        path: buildPath
    }
};
module.exports = [client, server]
