/*
 * @description: 服务列表
 * @version: 1.0.0
 * @Author: liya
 * @Date: 2020-08-25 17:11:12
 * @LastEditors: liya
 * @LastEditTime: 2020-08-25 17:45:34
 */
const ServicePromptList = [
  {
    type: 'list',
    name: 'webpack4',
    message: '是否需要webpack4构建服务?',
    choices: [
      '是',
      '否'
    ],
    filter: function(val) {
      return val === '是' ? true : false;
    }
  },
  {
    type: 'list',
    name: 'publish',
    message: '是否需要安装一键发布服务?',
    choices: [
      '是',
      '否'
    ],
    filter: function(val) {
      return val === '是' ? true : false;
    }
  },
  {
    type: 'list',
    name: 'install',
    message: '是否需要分源下载服务?',
    choices: [
      '是',
      '否'
    ],
    filter: function(val) {
      return val === '是' ? true : false;
    }
  },
  {
    type: 'list',
    name: 'monitor',
    message: '是否需要监控服务?',
    choices: [
      '是',
      '否'
    ],
    filter: function(val) {
      return val === '是' ? true : false;
    }
  },
  {
    type: 'list',
    name: 'upload',
    message: '是否需要上传服务?',
    choices: [
      '是',
      '否'
    ],
    filter: function(val) {
      return val === '是' ? true : false;
    }
  }
];
module.exports = ServicePromptList;