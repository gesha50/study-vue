const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],
  // publicPath: process.env.NODE_ENV === "production" ? "/study-vue/" : "/",
  outputDir: "docs",

  devServer: {
    proxy: "http://151.248.114.103/",
  },

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: true,
    },
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
});
