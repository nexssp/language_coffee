let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Coffee Script";
languageConfig.description =
  "CoffeeScript is a little language that compiles into JavaScript.";
languageConfig.url = "https://coffeescript.org";
languageConfig.founders = ["Jeremy Ashkenas"];
languageConfig.developers = [""];
languageConfig.years = ["2009"];
languageConfig.extensions = [".coffee"];
languageConfig.executeCommandLine = "coffee";
languageConfig.printCommandLine = ""; //no console.log() needed to display result eg node -p "4+6"
languageConfig.checkSyntax = "";
languageConfig.interactiveShell = "coffee";
languageConfig.builders = {};
languageConfig.compilers = {
  node: {
    install: "npm install --global coffeescript",
    command: "coffee",
    args: "<file>", //
    help: ``
  }
};
languageConfig.errors = require("./nexss.coffee.errors");
languageConfig.languagePackageManagers = {
  npm: {
    installation: "installed.",
    messageAfterInstallation: null, // sometimes there is need of add something to the files can be add here eg php for composer.
    installed: "npm list",
    search: "npm search",
    install: "npm install",
    uninstall: "npm remove",
    help: "npm help",
    version: "npm --version",
    init: () => {
      if (
        !require("fs").existsSync(
          require("path").join(process.cwd(), "package.json")
        )
      ) {
        require("child_process").execSync("npm init -y", { stdio: "inherit" });
        console.log("initialized npm project.");
      } else {
        console.log("npm already initialized.");
      }
    },
    // if command not found in specification
    // run directly on package manager
    else: "npm"
  },
  yarn: {
    installation: "scoop install yarn",
    list: "yarn list",
    search: "yarn search",
    install: "yarn list",
    uninstall: "yarn remove",
    help: "yarn help",
    version: "yarn help"
  }
};

module.exports = languageConfig;
