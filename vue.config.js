const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],

  outputDir: "build",

  devServer: {
    proxy: "http://151.248.114.103/",
  },

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true,
    },
  },
});
