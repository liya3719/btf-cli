"use strict";
const fs = require('fs');
const os = require('os');
const path = require('path');
const baseDir = process.cwd();
const chalk = require('chalk');
const symbols = require('log-symbols');
const handlebars = require('handlebars');
const download = require('download-git-repo');
class Template {
  constructor(componentName) {
    this.name = componentName;
  }
  /**
   * 生成工程模板并且安装项目依赖
   * @returns {Promise.<void>}
   */
  async generateTpl() {
    if(fs.existsSync(`${baseDir}/${this.name}`)) {
      console.log(symbols.error, chalk.red(`Components already exist`));
      process.exit();
    }
    console.log(chalk.green(`generating component template...`));
    console.log(chalk.green(`please waiting...`));
    download('liya3719/vue-ssr-component-template', `${baseDir}/${this.name}`, async (err) => {
      if (err) {
        console.log(symbols.success, chalk.green(err));
      }
    });
  }
  renameComponent(meta) {
    var fileName = `${baseDir}/${this.name}/package.json`;
    if(fileName) {
      var packageConfig = fs.readFileSync(`${baseDir}/${this.name}/package.json`).toString();
      var result = handlebars.compile(packageConfig)(meta);
      fs.writeFileSync(`${baseDir}/${this.name}/package.json`, result);
    }
  }
}
module.exports = Template;