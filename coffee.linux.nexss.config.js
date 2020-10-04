let languageConfig = Object.assign({}, require("./coffee.win32.nexss.config"));
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const sudo = os.sudo();
languageConfig.compilers = {
  coffee: {
    install: os.replacePMByDistro(`${sudo}npm install --global coffeescript`),
    command: "coffee",
    args: "<file>", //
    help: ``,
  },
};

// This is the same as win32 one.
module.exports = languageConfig;
