/*
 * @description: 安装项目依赖
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2019-03-26 14:57:37
 * @LastEditors: liya
 * @LastEditTime: 2020-08-25 17:56:13
 */
"use strict";
const which = require('which');
const childProcess = require('child_process');

class installService {
  constructor() {}
  /**
   * 查看本地是否安装了npm, cnpm, yarn等工具
   * 安装了则执行项目依赖安装
   */
  checkNpm() {
    let npms = ['tnpm', 'npm', 'cnpm', 'yarn'];
    for (let i = 0, len = npms.length; i < len; i++) {
      try {
        which.sync(npms[i]);
        console.log(`npm used ${npms[i]}`);
        return npms[i];
      } catch (error) {
        console.error(`please install ${npms[i]}`);
      }
    }
  }
  //开启子进程执行安装任务
  execCmd(cmd, args, fn) {
    args = args || [];
    let runner = childProcess.spawn(cmd, args, {
      stdio: 'inherit'
    });
    runner.on('close', (code) => {
      if (fn) {
        fn(code);
      }
    })
  }
}

module.exports = installService;