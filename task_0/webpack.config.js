const path = require("path");

module.exports = {
  // Mode can be "development", "production", or "none"
  mode: process.env.NODE_ENV || "development",

  // Entry point of the application
  entry: "./src/index.ts",

  // Output configuration
  output: {
    filename: "main.js", // The name of the output file
    path: path.resolve(__dirname, "dist"), // The directory to place the output file
    clean: true, // Cleans the output directory before each build
  },

  // Module resolution
  resolve: {
    extensions: [".ts", ".js"], // Automatically resolve these extensions
  },

  // Module rules (loaders)
  module: {
    rules: [
      {
        test: /\.ts$/, // Process files ending in .ts
        use: "ts-loader", // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Ignore node_modules
      },
    ],
  },

  // Devtool for source maps (helpful during development)
  devtool: "source-map",

  // Development server (if you choose to use webpack-dev-server)
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server
  },
};
