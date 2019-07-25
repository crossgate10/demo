module.exports = {
    devServer: {
        host: 'https://crossgate10.github.io/demo',
        port: 80,
    },
    // publicPath: './',
    publicPath: './',
    outputDir: 'docs',
    configureWebpack:{
      optimization: {
        splitChunks: {
          chunks: 'all'
        }
      }
    },
    crossorigin: "anonymous",
    chainWebpack: config => {
        config.module
          .rule('markdown')
          .test(/\.md$/)
          .use('frontmatter-markdown-loader')
          .loader('frontmatter-markdown-loader')
          .tap(options => {
            return {
              vue: {
                root: 'markdown-body'
              }
            }
          });
      }
};