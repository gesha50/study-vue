const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "build",
  devServer: {
    proxy: "http://151.248.114.103/",
  },
});
