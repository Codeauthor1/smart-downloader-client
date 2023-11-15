module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Required for expo-router
      "expo-router/babel",
    ],
    env: {
      production: {
        plugins: [
          "react-native-paper/babel",
          [
            "module:react-native-dotenv",
            {
              envName: "APP_ENV",
              moduleName: "@env",
              path: ".env",
            },
          ],
          [
            "module-resolver",
            {
              root: ["./src"],
              alias: {
                "@widgets": "./src/widgets/",
                "@hooks": "./hooks/",
                "@apis": "./src/apis/",
                types: "./src/types/",
              },
            },
          ],
        ],
      },
    },
  };
};
