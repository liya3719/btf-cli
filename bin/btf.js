#! /usr/bin/env node
"use strict";
const ora = require('ora');
const figlet = require('figlet');
const inquirer = require('inquirer');
const commander = require('commander');
const init = require('../libs/init');
const version = require('../package.json').version;
const promptList = require('../config/init.config');
const gitlabList = require('../config/gitlab.config');
const serviceList = require('../config/service.config');
const downloading = ora(`downloading project template`);
commander.version(version);
commander.usage(`<init、login、add、dev、publish、upload、install> [project-name]`);
commander.command('login')
         .description('sign your gilab account')
         .action((cmd) => {
           inquirer.prompt(gitlabList).then((res) => {
             console.log(`res ------`, res);
           })
         })
commander.command('init <app-name>')
         .description('the project template initialize command')
         .action(async (cmd) => {
           var tpl = new init(cmd);
           inquirer.prompt(promptList).then((res) => {
             downloading.start();
             try {
              //  获取命令行cmd参数，组合到res对象，对工程模板编译
              res['name'] = cmd;
              tpl.generateTpl(res.template, res);
              downloading.succeed(`download project template success`);
             } catch (error) {
               downloading.fail(`download project template fail`);
             };
           })
         })
commander.command('dev')
         .description('run local project')
         .action((cmd) => {
           console.log(`dev`);
         })
commander.command('add')
         .description('add support service')
         .action((cmd) => {
           inquirer.prompt(serviceList).then((res) => {
             console.log(res)
           })
         });
commander.command('build')
         .description('run prod build')
commander.command('publish')
         .description('async project to gitlab')
commander.command('upload')
         .description('upload static resource')
commander.command('monitor')
         .description('monitor your project')
commander.parse(process.argv);
if (!commander.args.length) {
  console.log();
  console.log(figlet.textSync('btf cli', '3D-ASCII'));
  commander.help();
}