const path = require("path");

module.exports = {
   resolve: {
      alias: {
         globalize$: path.resolve(__dirname, "node_modules/globalize/dist/globalize.js"),
         globalize: path.resolve(__dirname, "node_modules/globalize/dist/globalize"),
         cldr$: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr.js"),
         cldr: path.resolve(__dirname, "node_modules/cldrjs/dist/cldr"),
      },
   },
};
