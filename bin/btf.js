#! /usr/bin/env node
"use strict";
const ora = require('ora');
const figlet = require('figlet');
const shell = require('shelljs');
const inquirer = require('inquirer');
const commander = require('commander');
const Template = require('../common/init');
const registies = require('../common/registries');
const version = require('../package.json').version;
const promptList = [{
    type: 'input',
    name: 'author',
    message: ' Author: '
  },
  {
    type: 'input',
    name: 'description',
    message: ' description: '
  },
]
const downloading = ora(`downloading component template`);
commander.version(version)
  .option('-n, --name', 'component name');
commander.usage(`<init、publish> [project-name]`);
commander.command('init <component-name>')
  .description('the project template initialize command')
  .action(async (cmd) => {
    var template = new Template(cmd);
    template.generateTpl();
    inquirer.prompt(promptList).then((answer) => {
      answer.name = cmd;
      answer.author = `${answer.author} ${answer.author}@zuoyebang.com`
      downloading.start();
      setTimeout(() => {
        downloading.succeed();
      }, 1500);
      template.renameComponent(answer);
    });
  })
commander.parse(process.argv);
if (!commander.args.length) {
  console.log();
  console.log(figlet.textSync('btf cli', '3D-ASCII'));
  commander.help();
}