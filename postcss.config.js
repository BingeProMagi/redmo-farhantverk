const postcssPresetEnv = require(`postcss-preset-env`)
const postcssMixins = require(`postcss-mixins`)
const postcssNested = require(`postcss-nested`)
const postcssImport = require(`postcss-easy-import`)

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
        stage: 0,
        autoprefixer: {
            grid: true
        }
    }),
    postcssMixins(),
    postcssNested(),
  ],
})