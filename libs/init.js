/*
 * @description: 脚手架初始化服务
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2019-03-19 11:13:59
 * @LastEditors: liya
 * @LastEditTime: 2020-08-25 18:00:26
 */
"use strict";
const fs = require('fs');
const baseDir = process.cwd();
const which = require('which');
const chalk = require('chalk');
const shell = require('shelljs');
const symbols = require('log-symbols');
const install = require('./install.js');
const handlebars = require('handlebars');
const download = require('download-git-repo');
const templateList = require('../config/template.config.js');
const INSTALL = new install();
class Template {
  constructor(projectName) {
    this.projectName = projectName;
    if(fs.existsSync(`${baseDir}/${this.projectName}`)) {
      console.log(symbols.error, chalk.red(`project already exist`));
      process.exit();
    }
  }
  /**
   * 生成工程模板
   * @param {string} templateName 工程模板名称
   * @param {Object} meta package.json 配置信息
   * @returns {Promise.<void>}
   */
  generateTpl(templateName, meta) {
    let _self = this;
    let template = templateList[templateName];
    download(template, `${baseDir}/${this.projectName}`,(err) => {
      if (err) {
        console.log(symbols.error);
      }
      _self.renameProject(meta);
    });
  }
  /**
   * 更新工程模板package.json内容
   * @param {object} meta package.json接收的信息
   */
  renameProject(meta) {
    var fileName = `${baseDir}/${this.projectName}/package.json`;
    if(fileName) {
      var packageConfig = fs.readFileSync(fileName).toString();
      var result = handlebars.compile(packageConfig)(meta);
      fs.writeFileSync(`${baseDir}/${this.projectName}/package.json`, result);
    }
    try {
      if(meta.template === 'VueTemplate') {
        // 获取模板环境变量配置信息
        let production = `${baseDir}/${this.projectName}/.env.production`;
        let productionConfig = fs.readFileSync(production).toString();
        let productionResult = handlebars.compile(productionConfig)(meta);
        fs.writeFileSync(production, productionResult);
      }
      // 获取模板package.json
      let fileName = `${baseDir}/${this.projectName}/package.json`;
      let packageConfig = fs.readFileSync(fileName).toString();
      // 获取模板 README.md
      let readme = `${baseDir}/${this.projectName}/README.md`;
      let readmeConfig = fs.readFileSync(readme).toString();
      
      // 获取命令行输入信息更新到模板
      let packageResult = handlebars.compile(packageConfig)(meta);
      let readmeResult = handlebars.compile(readmeConfig)(meta);

      // 更新模板信息
      fs.writeFileSync(fileName, packageResult);
      fs.writeFileSync(readme, readmeResult);
    } catch (error) { 
      throw Error(`renameProject method error ______________ ${JSON.stringify(error)}`);
    } 

  }
  /**
   * 安装项目依赖
   */
  install() {
    let npm = INSTALL.checkNpm();
    shell.cd(`${baseDir}/${this.projectName}`);
    INSTALL.execCmd(which.sync(npm), ['install'], () => {
      console.log(chalk.blue(`npm installed end`));
    })
  }
}
module.exports = Template;