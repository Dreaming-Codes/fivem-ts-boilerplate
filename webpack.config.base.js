const path = require("path");

const srcPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'dist');

const server = {
    entry: path.resolve(srcPath, "server") + "/server.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "ts"
                }

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
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "esbuild-loader",
                options: {
                    loader: "ts"
                }

            }
        ]
    },
    output: {
        filename: 'client.js',
        path: buildPath
    }
};
module.exports = [client, server]
