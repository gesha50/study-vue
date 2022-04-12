const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "build",
  devServer: {
    proxy: "http://localhost:8000",
  },
});
