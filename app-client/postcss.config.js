const autoprefixer = require("autoprefixer")();
const tailwindcss = require("tailwindcss")("./tailwind.config");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
