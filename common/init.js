"use strict";
const fs = require('fs');
const os = require('os');
const path = require('path');
const baseDir = process.cwd();
const chalk = require('chalk');
const shell = require('shelljs');
const symbols = require('log-symbols');
const handlebars = require('handlebars');
const download = require('download-git-repo');
const templateList = require('../config/template.config.js');
class Template {
  constructor(projectName) {
    this.projectName = projectName;
  }
  /**
   * 生成工程模板
   * @returns {Promise.<void>}
   */
  generateTpl(templateName) {
    if(fs.existsSync(`${baseDir}/${this.projectName}`)) {
      console.log(symbols.error, chalk.red(`project already exist`));
      process.exit();
    }
    let template = templateList[templateName];
    download(template, `${baseDir}/${this.projectName}`,(err) => {
      if (err) {
        throw Error(symbols.error);
        // console.log(chalk.green(err));
      }
    });
  }
  /**
   * 更新工程模板package.json内容
   * @param {object} meta package.json接收的信息
   */
  renameProject(meta) {
    var fileName = `${baseDir}/${this.projectName}/package.json`;
    if(fileName) {
      var packageConfig = fs.readFileSync(`${baseDir}/${this.projectName}/package.json`).toString();
      var result = handlebars.compile(packageConfig)(meta);
      fs.writeFileSync(`${baseDir}/${this.projectName}/package.json`, result);
    }
  }
  /**
  * 执行项目npm install
  */
  async execNpmInstall() {
    let currentProjectPath = `${baseDir}/${this.projectName}`;
    shell.exec(`cd ${currentProjectPath}}`);
    shell.exec(``)
  }
  /**
   * 安装脚手架提供的服务
   */
  async addBtfService() {
    
  }
}
module.exports = Template;