#! /usr/bin/env node
"use strict";
const ora = require('ora');
const figlet = require('figlet');
const shell = require('shelljs');
const inquirer = require('inquirer');
const commander = require('commander');
const Template = require('../common/init');
const version = require('../package.json').version;
const promptList = require('../config/init.config.js');
const registies = require('../config/registries.config.js');
const downloading = ora(`downloading project template`);
commander.version(version);
commander.option('-n, --name', 'project name');
commander.usage(`<init、dev、publish、upload、install> [project-name]`);
commander.command('init')
         .description('the project template initialize command')
         .action(async (cmd) => {
           console.log(cmd);
         })
commander.command('login')
         .description('sign your gilab account')
         .action((cmd) => {
           console.log(cmd);
         })
commander.command('dev')
         .description('run local project')
commander.command('mock')
         .description('run local mock')
commander.command('build')
         .description('run prod build')
commander.command('install')
         .description('diff download node modules')
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