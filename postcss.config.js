const postcssPresetEnv = require(`postcss-preset-env`)
const postcssMixins = require(`postcss-mixins`)
const postcssNested = require(`postcss-nested`)

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