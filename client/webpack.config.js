const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "src") + "/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "index.js",
        chunkFilename: "[id].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devServer: {
        static: "./dist/",
        historyApiFallback: true,
        compress: true,
        open: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                loader: "ts-loader"
            },
            {
                test: /\.(css)$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(gif|png|svg|jpe|jpg|jpeg)$/,
                loader: require.resolve("url-loader"),
                options: {
                    limit: 10000,
                    name: "[name].[hash:8].[ext]"
                }
            }
        ]
    }
};




