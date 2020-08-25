#! /usr/bin/env node
"use strict";
const ora = require('ora');
const figlet = require('figlet');
const shell = require('shelljs');
const inquirer = require('inquirer');
const commander = require('commander');
const init = require('../libs/init');
const version = require('../package.json').version;
const promptList = require('../config/init.config.js');
const downloading = ora(`downloading project template`);
commander.version(version);
commander.option('-n, --name', 'project name');
commander.usage(`<init、login、dev、publish、upload、install> [project-name]`);
commander.command('login')
         .description('sign your gilab account')
         .action((cmd) => {
           console.log(`login cmd`, cmd);
         })
commander.command('init <app-name>')
         .description('the project template initialize command')
         .action(async (cmd) => {
           console.log(`cmd ------------`, cmd);
           var tpl = new init(cmd);
           inquirer.prompt(promptList).then((res) => {
             downloading.start();
             try {
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
commander.command('mock')
         .description('run local mock')
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