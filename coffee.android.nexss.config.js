let languageConfig = Object.assign({}, require("./coffee.win32.nexss.config"));
// const sudo = process.sudo;
languageConfig.compilers = {
  coffee: {
    install: process.replacePMByDistro(
      `npm install --global coffeescript`
    ),
    command: "coffee",
    args: "<file>", //
    help: ``,
  },
};

// This is the same as win32 one.
module.exports = languageConfig;
