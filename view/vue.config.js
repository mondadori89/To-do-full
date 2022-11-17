require('dotenv').config();

const port = process.env.PORT || 8000;

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '^/api': {
        target: `http://localhost:${port}`,
        changeOrigin: true
      },
    }
  }
})
